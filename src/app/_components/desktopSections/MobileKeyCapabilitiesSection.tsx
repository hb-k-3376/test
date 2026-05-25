'use client';

import { useState } from 'react';
import Image from 'next/image';
import { KEY_CAPABILITIES } from '../ohrContent';

export function MobileKeyCapabilitiesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCardPress = (index: number) => {
    if (activeIndex === null) {
      setActiveIndex(index);
      return;
    }
    setActiveIndex(index);
  };

  return (
    <section className="md:hidden w-full">
      {KEY_CAPABILITIES.map((capability, index) => {
        const isOpen = activeIndex === index;

        return (
          <article
            key={`mobile-capability-${capability.title.join('-')}`}
            className={`relative w-full overflow-hidden transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isOpen ? 'h-[407px]' : 'h-[152px]'
            }`}
          >
            <Image
              alt=""
              className="absolute inset-0 size-full object-cover"
              src={capability.image}
              fill
              sizes="100vw"
            />

            <div
              className={`absolute inset-0 transition-colors duration-400 ${
                isOpen ? 'bg-[#00000050]' : 'bg-[#00000075]'
              }`}
              style={{
                backgroundImage:
                  'linear-gradient(180deg, rgba(102, 102, 102, 0) 27.453%, rgba(0, 0, 0, 0.8) 82.911%)',
              }}
            />

            <button
              type="button"
              onClick={() => handleCardPress(index)}
              className="absolute inset-0 z-20 cursor-pointer"
              aria-expanded={isOpen}
              aria-label={`${capability.title.join(' ')} details`}
            />

            <div className="relative z-10 h-full flex flex-col items-center justify-center px-0 py-[45px]">
              <div className="w-[91.603%] text-white uppercase font-aktiv text-[24px] leading-[normal]">
                {capability.title.map((line) => (
                  <p key={`mobile-title-${line}`} className="mb-0 last:mb-0">
                    {line}
                  </p>
                ))}
              </div>

              <div
                className={`w-[91.603%] overflow-hidden transition-all duration-400 ${
                  isOpen
                    ? 'max-h-[220px] opacity-100 mt-[36px]'
                    : 'max-h-0 opacity-0 mt-0'
                }`}
              >
                <p className="text-white uppercase font-semibold text-[16px] leading-[32px] tracking-[-0.32px] whitespace-pre-wrap">
                  {capability.detail}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
