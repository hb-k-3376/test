'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  stagger?: number;
  delay?: number;
  duration?: number;
  y?: number;
  x?: number;
  start?: string;
  startScale?: number;
  ease?: string;
  revealChildren?: boolean;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  as: Component = 'div',
  className = '',
  stagger = 0.06,
  delay = 0.5,
  duration = 0.8,
  y = 24,
  x = 0,
  start = 'top 88%',
  startScale = 0.985,
  ease = 'power3.out',
  revealChildren = false,
  once = true,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const element = containerRef.current;
      if (!element) return;

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      const targets = revealChildren
        ? (Array.from(element.children) as HTMLElement[])
        : [element];

      if (!targets.length) return;

      if (prefersReducedMotion) {
        gsap.set(targets, { autoAlpha: 1, x: 0, y: 0, scale: 1 });
        return;
      }

      gsap.set(targets, { autoAlpha: 0, x, y, scale: startScale });

      const tween = gsap.to(targets, {
        autoAlpha: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration,
        delay,
        stagger: revealChildren ? stagger : 0,
        ease,
        scrollTrigger: {
          trigger: element,
          start,
          toggleActions: once ? 'play none none none' : 'play none none reverse',
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    {
      scope: containerRef,
      dependencies: [
        stagger,
        delay,
        duration,
        y,
        x,
        start,
        startScale,
        ease,
        revealChildren,
        once,
      ],
    }
  );

  return (
    <Component ref={containerRef} className={className}>
      {children}
    </Component>
  );
}
