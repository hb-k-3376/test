import Image from 'next/image';
import ScrollReveal from '@/util/ScrollReveal';
import { KEY_CAPABILITIES } from '../ohrContent';

export function DesktopKeyCapabilitiesSection() {
  return (
    <section className="key-capabilities w-full h-(--key-cards-height) hidden md:flex">
      {KEY_CAPABILITIES.map((capability) => (
        <article key={capability.title.join('-')} className="key-capability-card">
          <Image
            alt=""
            className="absolute inset-0 size-full object-cover"
            src={capability.image}
            fill
            sizes="(min-width: 1440px) 33vw, 100vw"
          />
          <div className="key-capability-overlay" />
          <div className="key-capability-content">
            <div className="key-capability-title font-aktiv">
              <ScrollReveal as="div" revealChildren stagger={0.06} y={18} duration={0.6}>
                {capability.title.map((line) => (
                  <p key={line} className="leading-[normal] text-[24px] lg:text-[30px]">
                    {line}
                  </p>
                ))}
              </ScrollReveal>
            </div>
            <p className="key-capability-detail font-medium">{capability.detail}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
