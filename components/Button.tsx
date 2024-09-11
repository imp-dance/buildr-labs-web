"use client";

import { CSSProperties, MouseEvent, useState } from "react";

const getTotalOffset = (el: HTMLElement) => {
  let a: HTMLElement | null = el,
    offsetLeft = 0,
    offsetTop = 0;
  while (a) {
    offsetLeft += a.offsetLeft;
    offsetTop += a.offsetTop;
    a = a.offsetParent as null;
  }
  return { offsetLeft, offsetTop };
};

export function Button(props: {
  as?: "a";
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  innerClassName?: string;
  animate?: boolean;
}) {
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });
  const Element = props.as || "button";

  const onMouseMove = (event: MouseEvent) => {
    const el = event.currentTarget as HTMLElement;
    const { pageX, pageY } = event;
    const { offsetLeft, offsetTop } = getTotalOffset(el);
    setPos({ x: pageX - offsetLeft, y: pageY - offsetTop });
  };

  return (
    <Element
      {...props}
      className={`${
        props.className ?? ""
      } transition-all block w-max relative p-[1px] rounded-sm hover:bg-teal-900  text-zinc-100 ${
        props.animate ? "animateborder" : ""
      }`}
      style={
        {
          "--x": pos.x,
          "--y": pos.y,
        } as CSSProperties
      }
      onMouseMove={(e) => onMouseMove(e)}
    >
      <span
        className={`transition-all inline-block p-3 px-5 bg-zinc-950 rounded-sm hover:bg-teal-950 hover:to-zinc-900  text-sm tracking-wider font-semibold ${props.innerClassName}`}
      >
        {props.children}
      </span>
    </Element>
  );
}
