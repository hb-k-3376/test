'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/cn';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const WORD_WRAPPER_CLASS = 'ohr-aktiv-word-reveal-wrapper';
const WORD_INNER_CLASS = 'ohr-aktiv-word-reveal-inner';

function wrapWords(root: HTMLElement) {
  const textNodes: Text[] = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      const text = node.textContent ?? '';
      if (!text.trim()) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (parent.closest(`.${WORD_WRAPPER_CLASS}`)) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  let current = walker.nextNode();
  while (current) {
    textNodes.push(current as Text);
    current = walker.nextNode();
  }

  textNodes.forEach((textNode) => {
    const source = textNode.textContent ?? '';
    const fragments = source.split(/(\s+)/);
    const fragment = document.createDocumentFragment();

    fragments.forEach((part) => {
      if (!part) return;

      if (/^\s+$/.test(part)) {
        fragment.appendChild(document.createTextNode(part));
        return;
      }

      const wrapper = document.createElement('span');
      wrapper.className = WORD_WRAPPER_CLASS;
      wrapper.style.display = 'inline-block';
      wrapper.style.overflow = 'hidden';
      wrapper.style.verticalAlign = 'top';

      const inner = document.createElement('span');
      inner.className = WORD_INNER_CLASS;
      inner.style.display = 'inline-block';
      inner.style.opacity = '0';
      inner.style.transform = 'translateY(110%) rotateX(-45deg)';
      inner.style.willChange = 'transform, opacity';
      inner.textContent = part;

      wrapper.appendChild(inner);
      fragment.appendChild(wrapper);
    });

    textNode.parentNode?.replaceChild(fragment, textNode);
  });
}

interface AktivRevealProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  start?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  once?: boolean;
}

export default function AktivReveal({
  children,
  as: Component = 'div',
  className = '',
  start = 'top 88%',
  delay = 0,
  duration = 0.6,
  stagger = 0.05,
  ease = 'power2.out',
  once = true,
}: AktivRevealProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const element = containerRef.current;
      if (!element) return;

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      if (prefersReducedMotion) return;

      const originalHtml = element.innerHTML;
      wrapWords(element);

      const words = element.querySelectorAll<HTMLElement>(
        `.${WORD_WRAPPER_CLASS} > .${WORD_INNER_CLASS}`
      );
      if (!words.length) return;

      const tween = gsap.to(words, {
        y: 0,
        rotateX: 0,
        opacity: 1,
        duration,
        delay,
        stagger,
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
        element.innerHTML = originalHtml;
      };
    },
    {
      scope: containerRef,
      dependencies: [start, delay, duration, stagger, ease, once],
    }
  );

  return (
    <Component ref={containerRef} className={cn('font-aktiv', className)}>
      {children}
    </Component>
  );
}
