"use client";
import { useEffect, useRef } from "react";

const rand = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const AMOUNT = 150;

class Point {
  x: number;
  initialX: number;
  y: number;
  size: number;

  constructor(
    i: number,
    total: number,
    ctx: CanvasRenderingContext2D
  ) {
    this.size = 2;
    const width = ctx.canvas.width;
    const totalWidth = total * (this.size * 2);
    const totalCenter = width / 2;
    const centerStart = totalCenter - totalWidth / 2;
    this.y = rand(0, ctx.canvas.height);
    this.x = centerStart + this.size * 2 * i;
    this.initialX = this.x;
  }

  update(ctx: CanvasRenderingContext2D) {
    const arcSize = 5;
    this.x =
      (Math.sin(this.y / arcSize) * arcSize + this.x) * 0.7 + 50;
    if (this.x > ctx.canvas.width) {
      this.x = this.initialX;
    }
    this.y = this.y > ctx.canvas.height ? 0 : this.y + 0.1;
    ctx.rect(this.x, this.y, this.size, this.size);
    ctx.fillStyle = "rgb(73, 73, 73)";
    ctx.fill();
  }
}

export function Chain() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const points = Array.from({ length: AMOUNT })
      .fill(0)
      .map((_, i) => new Point(i, AMOUNT, ctx));
    let lastFrame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      points.forEach((point) => {
        point.update(ctx);
      });
      lastFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(lastFrame);
  }, []);
  return (
    <canvas
      ref={ref}
      className="hidden  md:block clipPathIn"
      style={{
        height: 70,
        width: 100,
        position: "absolute",
        left: 0,
        bottom: 150,
        margin: "0 auto",
        zIndex: -1,
        transform: "scale(3)",
        opacity: 0.2,
      }}
    ></canvas>
  );
}
