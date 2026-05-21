'use client';

import { useEffect, useRef } from 'react';

const CIRCLE_SIZE = 84;
const START_POSITION = { x: 830, y: 269 };
const FOLLOW_SPEED = 0.22;

export default function CursorFollower() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let rafId = 0;
    let targetX = START_POSITION.x;
    let targetY = START_POSITION.y;
    let currentX = START_POSITION.x;
    let currentY = START_POSITION.y;

    const render = () => {
      currentX += (targetX - currentX) * FOLLOW_SPEED;
      currentY += (targetY - currentY) * FOLLOW_SPEED;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    const handleMouseMove = (event: MouseEvent) => {
      targetX = event.clientX - CIRCLE_SIZE / 2;
      targetY = event.clientY - CIRCLE_SIZE / 2;
    };

    const handleWindowMouseOut = (event: MouseEvent) => {
      if (!event.relatedTarget) {
        targetX = START_POSITION.x;
        targetY = START_POSITION.y;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseout', handleWindowMouseOut);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleWindowMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed left-0 top-0 z-9999 size-[84px] rounded-full pointer-events-none bg-[rgba(255,255,255,0.22)] will-change-transform max-[1280px]:hidden"
      aria-hidden="true"
    />
  );
}
