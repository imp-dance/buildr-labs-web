"use client";
import { useEffect, useRef } from "react";

const AMOUNT_OF_BITS = 80;
const getBitColor = () => "#073631";
const getSpeed = () => rand(0.01, 0.2);
const getSize = () => Math.random() * 2 + 2;
const SIZE_SPEED = 0.01;

export function FloatingBitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bits.forEach((bubble) => bubble.update(ctx));
      lastFrame = requestAnimationFrame(update); // Create a loop
    };

    update(); // Start the animation loop

    return () => cancelAnimationFrame(lastFrame);
  }, []);

  return <canvas ref={canvasRef} className="bg-canvas" />;
}

class Bit {
  x: number;
  y: number;
  radius: number;
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
    this.radius = getSize();
    this.fill = fill;
    this.speed = getSpeed();
    this.hasFlipped = false;
    this.flipRadius = Math.random() * 5 + 5;
  }

  update(ctx: CanvasRenderingContext2D) {
    if (this.y < -this.cHeight || this.x < -this.cWidth) {
      this.y = ctx.canvas.height + this.radius;
      this.speed = getSpeed();
      this.radius = getSize();
      this.hasFlipped = false;
      this.x = Math.random() * this.cWidth;
    }
    if (!this.hasFlipped && this.radius < this.flipRadius) {
      this.radius += SIZE_SPEED;
    }
    if (this.radius >= this.flipRadius) {
      this.hasFlipped = true;
    }
    if (this.radius > 1 && this.hasFlipped) {
      this.radius -= SIZE_SPEED;
    }

    this.y -= this.speed;
    ctx.fillRect(this.x, this.y, this.radius, this.radius);
    ctx.fillStyle = this.fill;
    ctx.fill();
  }
}

const rand = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};
