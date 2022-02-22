import {
  fromEvent,
  switchMap,
  takeUntil,
  tap,
} from "rxjs";

const mapElem = document.querySelector("#map");
const targetElem = document.querySelector("#target");
const resetBtn = document.querySelector("#reset");
const scrollStep = 0.05;

export const setMap = () => {
  /* drag */
  const mouseup = fromEvent(mapElem, "mouseup").pipe(
    tap(() => mapElem.classList.toggle("map__cursor--cross"))
  );

  const mousemove = (start) => {
    // change cursor when moving element
    mapElem.classList.toggle("map__cursor--cross");

    return fromEvent(mapElem, "mousemove").pipe(
      tap((event) => {
        const coordinates = getCoordinates(targetElem);
        setCoordinates(
          {
            x: coordinates.x + event.offsetX - start.x,
            y: coordinates.y + event.offsetY - start.y,
          },
          targetElem
        );
      }),
      takeUntil(mouseup)
    );
  };

  const drag = fromEvent(mapElem, "mousedown").pipe(
    // detect mousemove
    switchMap((event) => mousemove({ x: event.offsetX, y: event.offsetY }))
  );

  /* scroll */
  const scroll = fromEvent(mapElem, "wheel").pipe(
    tap((event) => {
      const scale = getScale(targetElem);
      setScale(
        event.deltaY > 0 ? scale + scrollStep : scale - scrollStep,
        targetElem
      );
    })
  );

  /* subscribe */
  drag.subscribe();
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
    const [xArr, yArr] = [...elem.style.transform.matchAll(/-?\d+/g)];
    return { x: +xArr[0], y: +yArr[0] };
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
