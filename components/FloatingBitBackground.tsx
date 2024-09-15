"use client";
import { throttle } from "@/utils/throttle";
import { useEffect, useRef } from "react";

const AMOUNT_OF_BITS = 80;
const getBitColor = () => "#073631";
const getSpeed = () => rand(0.01, 0.2);
const getSize = () => Math.round(Math.random() * 3 + 2);
const SIZE_SPEED = 0.01;

export function FloatingBitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const bits = new Array<Bit>();
    for (let i = 0; i < AMOUNT_OF_BITS; i++) {
      bits.push(
        new Bit(canvas.width, canvas.height, i, getBitColor())
      );
    }

    let lastFrame = 0;
    const animate = () => {
      ctx.clearRect(
        0,
        0,
        canvas.clientWidth,
        canvas.clientHeight
      );
      bits.forEach((bubble) =>
        bubble.update(ctx, mousePos.current)
      );
      lastFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(lastFrame);
  }, []);

  useEffect(() => {
    const listener = throttle((e: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const scaleX = canvasRef.current.width / rect.width;
      const scaleY = canvasRef.current.height / rect.height;

      // Mouse position
      mousePos.current = {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    }, 100);
    document.addEventListener("mousemove", listener);
    return () =>
      document.removeEventListener("mousemove", listener);
  }, []);

  return <canvas ref={canvasRef} className="bg-canvas" />;
}

class Bit {
  x: number;
  y: number;
  size: number;
  fill: string;
  speed: number;
  hasFlipped: boolean;
  flipRadius: number;
  cWidth: number;
  cHeight: number;
  constructor(
    width: number,
    height: number,
    i: number,
    fill: string
  ) {
    this.cWidth = width;
    this.cHeight = height;
    this.x = Math.random() * width;
    this.y = height / 1.2 + (10 + i);
    this.size = getSize();
    this.fill = fill;
    this.speed = getSpeed();
    this.hasFlipped = false;
    this.flipRadius = Math.random() * 5 + 5;
  }

  update(
    ctx: CanvasRenderingContext2D,
    mouse: {
      x: number;
      y: number;
    }
  ) {
    if (this.y < -this.cHeight || this.x < -this.cWidth) {
      this.y = ctx.canvas.height + this.size;
      this.speed = getSpeed();
      this.size = getSize();
      this.hasFlipped = false;
      this.x = Math.random() * this.cWidth;
    }
    if (!this.hasFlipped && this.size < this.flipRadius) {
      this.size += SIZE_SPEED;
    }
    if (this.size >= this.flipRadius) {
      this.hasFlipped = true;
    }
    if (this.size > 1 && this.hasFlipped) {
      this.size -= SIZE_SPEED;
    }

    this.y -= this.speed;
    const height = this.size;
    const width = this.size;
    if (
      !inBounds(
        {
          x: this.x,
          y: this.y,
          width: 10,
          height: 10,
        },
        mouse
      )
    ) {
      ctx.fillStyle = this.fill;
      ctx.fillRect(this.x, this.y, width, height);
    } else {
      ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
      ctx.fillRect(this.x, this.y, width, height);
    }
    ctx.fill();
  }
}

const rand = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

function inBounds(
  a: {
    x: number;
    y: number;
    width: number;
    height: number;
  },
  b: {
    x: number;
    y: number;
  }
) {
  const inBoundsHorizontally =
    b.x >= a.x && b.x <= a.x + a.width;
  const inBoundsVertically = b.y >= a.y && b.y <= a.y + a.height;

  return inBoundsHorizontally && inBoundsVertically;
}
