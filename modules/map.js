import { fromEvent, switchMap, takeUntil, tap } from "rxjs";

const mapElem = document.querySelector("#map");
const targetElem = document.querySelector("#target");
const resetBtn = document.querySelector("#reset");
const scrollStep = 0.01;

export const setMap = () => {
  /* touch */
  const touch = fromEvent(mapElem, "touchstart", { passive: true }).pipe(
    switchMap((event) => {
      const start = { x: event.touches[0].pageX, y: event.touches[0].pageY };

      // change cursor when moving element
      mapElem.classList.add("map__cursor--cross");
      const coordinates = getCoordinates(targetElem);

      if (event.touches.length === 2) {
        const originalDistance = getDistance(event);
        const originalScale = getScale(targetElem);

        return fromEvent(mapElem, "touchmove", { passive: true }).pipe(
          tap((event) => {
            const distance = getDistance(event);

            console.log(event.touches);

            setScale(originalScale * (distance / originalDistance), targetElem); // O * (D + d) / D
          }),
          takeUntil(
            fromEvent(mapElem, "touchend", { passive: true }).pipe(
              tap(() => mapElem.classList.remove("map__cursor--cross"))
            )
          )
        );
      }

      return fromEvent(mapElem, "touchmove", { passive: true }).pipe(
        tap((event) => {
          setCoordinates(
            {
              x: coordinates.x + event.touches[0].pageX - start.x,
              y: coordinates.y + event.touches[0].pageY - start.y,
            },
            targetElem
          );
        }),
        takeUntil(
          fromEvent(mapElem, "touchend", { passive: true }).pipe(
            tap(() => mapElem.classList.remove("map__cursor--cross"))
          )
        )
      );
    })
  );

  /* drag */
  const drag = fromEvent(mapElem, "mousedown").pipe(
    // detect mousemove
    switchMap((event) => {
      const start = { x: event.clientX, y: event.clientY };
      const coordinates = getCoordinates(targetElem);

      // change cursor when moving element
      mapElem.classList.add("map__cursor--cross");

      return fromEvent(mapElem, "mousemove").pipe(
        tap((event) => {
          console.log({ x: event.clientX, y: event.clientY });
          // console.log(coordinates);
          setCoordinates(
            {
              x: coordinates.x + event.clientX - start.x,
              y: coordinates.y + event.clientY - start.y,
            },
            targetElem
          );
        }),
        takeUntil(
          fromEvent(mapElem, "mouseup").pipe(
            tap(() => mapElem.classList.remove("map__cursor--cross"))
          )
        )
      );
    })
  );

  /* scroll */
  const scroll = fromEvent(mapElem, "wheel", { passive: true }).pipe(
    tap((event) => {
      const scale = getScale(targetElem);
      setScale(
        event.deltaY > 0 ? scale + scrollStep : scale - scrollStep,
        targetElem
      );
    })
  );

  /* subscribe */
  isTouchDevice() ? touch.subscribe() : drag.subscribe();
  scroll.subscribe();

  /* reset */
  resetBtn.addEventListener("click", () => {
    targetElem.style.transform = "";
  });
};

/* helpers */
const getCoordinates = (elem) => {
  let x = 0;
  let y = 0;
  if (elem.style.transform) {
    const [xArr, yArr] = [...elem.style.transform.matchAll(/-?\d+\.?\d*/g)];
    if (xArr && yArr) {
      return { x: +xArr[0], y: +yArr[0] };
    }
  }
  return { x, y };
};

const setCoordinates = (coordinates, elem) => {
  const translate = `translate(${coordinates.x}px, ${coordinates.y}px)`;
  const otherTransform = elem.style.transform
    .replace(/translate\(\S+\s\S+\)/, "")
    .trim();
  elem.style.transform = translate + " " + otherTransform;
};

const getScale = (elem) => {
  let scale = 1;
  if (elem.style.transform.indexOf("scale") >= 0) {
    return +elem.style.transform
      .replace(/translate\(\S+\s\S+\)\s?/, "")
      .match(/\d\.?\d*/)[0];
  }
  return scale;
};

const setScale = (scale, elem) => {
  const otherTransform = elem.style.transform
    .replace(/scale\(\d\.?\d*\)/, "")
    .trim();
  const scaleStr = `scale(${scale})`;
  elem.style.transform = otherTransform + " " + scaleStr;
};

function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

function getDistance(event) {
  return Math.hypot(
    event.touches[0].pageX - event.touches[1].pageX,
    event.touches[0].pageY - event.touches[1].pageY
  );
}
1;
