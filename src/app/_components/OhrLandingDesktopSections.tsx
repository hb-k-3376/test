import Image from 'next/image';
import ScrollReveal from '@/util/ScrollReveal';
import AktivReveal from '@/util/AktivReveal';
import { ASSETS, KEY_CAPABILITIES } from './ohrContent';
import { HEAD_OFFICE } from './ohrLandingData';

export function DesktopHeroSection() {
  return (
    <section className="relative content-stretch flex flex-col gap-[10px] items-center justify-center w-full h-(--hero-height)">
      <div className="h-full relative shrink-0 w-full">
        <Image
          alt=""
          className="absolute inset-0 object-cover pointer-events-none size-full"
          src={ASSETS.hero}
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="-translate-x-1/2 absolute h-[31px] left-[calc(50%+0.5px)] top-[54px] w-[93px]">
        <Image
          alt=""
          className="absolute block inset-0 size-full"
          src={ASSETS.logoTop}
          fill
          sizes="93px"
        />
      </div>
    </section>
  );
}

export function DesktopIntroSection() {
  return (
    <section className="bg-white text-black flex flex-col gap-[39px] h-(--intro-height) items-center justify-center w-full">
      <div className="text-[28px] md:text-[50px]  text-center uppercase w-full font-aktiv">
        <AktivReveal>
          <p>
            DEFINING <br aria-hidden="true" className="md:hidden" />
            WHAT&apos;S
            <br aria-hidden="true" />
            NEXT IN BEAUTY
          </p>
        </AktivReveal>
      </div>
      <ScrollReveal>
        <div className="text-[16px] leading-[32px] md:text-[30px] md:leading-[46px] tracking-[-0.02em] text-center w-full font-semibold">
          우리는 아름다움의 가능성을 믿습니다. <br aria-hidden="true" /> 다양한 피부 타입,
          문화, 니즈를 이해하고, <br aria-hidden="true" />
          과학 기반의 맞춤형 솔루션으로 <br aria-hidden="true" className="md:hidden" />
          글로벌 뷰티 시장을 주도합니다.
        </div>
      </ScrollReveal>
    </section>
  );
}

type DesktopOverlaySectionProps = {
  imageSrc: string;
  overlayClassName: string;
  titleLines: {
    desktop: readonly string[];
    mobile?: readonly string[];
  };
  bodyLines: {
    desktop: readonly string[];
    mobile?: readonly string[];
  };
};

export function DesktopOverlaySection({
  imageSrc,
  overlayClassName,
  titleLines,
  bodyLines,
}: DesktopOverlaySectionProps) {
  const titleLinesMobile = titleLines.mobile ?? titleLines.desktop;
  const bodyLinesMobile = bodyLines.mobile ?? bodyLines.desktop;

  return (
    <section className="relative text-white flex flex-col gap-[39px] h-(--overlay-height) items-center justify-center w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <Image
          alt=""
          className="absolute object-cover size-full"
          src={imageSrc}
          fill
          sizes="100vw"
        />
        <div className={`absolute inset-0 ${overlayClassName}`} />
      </div>
      <AktivReveal className="w-full">
        <div className="relative text-[28px] md:text-[30px] leading-none text-center uppercase">
          <p className="md:hidden">
            {titleLinesMobile.map((line, index) => (
              <span key={`mobile-title-${line}-${index}`}>
                {line}
                {index < titleLinesMobile.length - 1 ? <br aria-hidden="true" /> : null}
              </span>
            ))}
          </p>
          <p className="hidden md:block">
            {titleLines.desktop.map((line, index) => (
              <span key={`desktop-title-${line}-${index}`}>
                {line}
                {index < titleLines.desktop.length - 1 ? <br aria-hidden="true" /> : null}
              </span>
            ))}
          </p>
        </div>
      </AktivReveal>
      <ScrollReveal>
        <div className="relative text-[16px] md:text-[18px] leading-[32px] text-center tracking-[-0.02em] uppercase whitespace-pre-wrap font-semibold w-full">
          <div className="md:hidden">
            {bodyLinesMobile.map((line, index) => (
              <p
                key={`mobile-body-${line.slice(0, 12)}-${index}`}
                className="leading-[32px] mb-0 last:mb-0"
              >
                {line}
              </p>
            ))}
          </div>
          <div className="hidden md:block">
            {bodyLines.desktop.map((line, index) => (
              <p
                key={`desktop-body-${line.slice(0, 12)}-${index}`}
                className="leading-[32px] mb-0 last:mb-0"
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export function DesktopKeyCapabilitiesTitle() {
  return (
    <section className="h-(--key-title-height) md:text-black text-white md:bg-white bg-black flex items-center justify-center">
      <p className="text-[28px] md:text-[50px] leading-none text-center uppercase">
        KEY CAPABILITIES
      </p>
    </section>
  );
}

export function DesktopKeyCapabilitiesSection() {
  return (
    <section className="key-capabilities w-full h-(--key-cards-height)">
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

export function DesktopOfficeSection() {
  return (
    <section className="h-[466px] md:h-(--office-section-height) flex items-center justify-center p-9">
      <div className="relative flex flex-col gap-[35px] h-full rounded-xl overflow-hidden items-center justify-center w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <Image
            alt=""
            className="absolute object-cover size-full rounded-xl"
            src={ASSETS.office}
            fill
            sizes="100vw"
          />
          <div className="absolute bg-[rgba(0,0,0,0.61)] inset-0 rounded-xl" />
        </div>
        <p className="relative z-10 text-white text-[28px] md:text-[30px] leading-none text-center uppercase font-aktiv">
          {HEAD_OFFICE.title}
        </p>
        <p className="relative z-10 h-[52px] text-white leading-[32px] text-[16px] md:text-[16px] text-center tracking-[-0.02em] uppercase w-full">
          {HEAD_OFFICE.address}
        </p>
        <p className="relative z-10 h-[43px] text-white text-[16px] md:text-[18px] text-center uppercase whitespace-nowrap font-aktiv font-medium">
          {HEAD_OFFICE.tel}
        </p>
        <p className="relative z-10 h-[43px] text-white text-[14px] md:text-[18px] text-center uppercase font-aktiv font-medium">
          {HEAD_OFFICE.email}
        </p>
      </div>
    </section>
  );
}

export function DesktopClosingSection({
  closingLines,
}: {
  closingLines: { desktop: readonly string[]; mobile: readonly string[] };
}) {
  return (
    <section className="bg-black flex flex-col h-(--footer-dark-height) items-center justify-center w-full text-white">
      <AktivReveal className="w-full">
        <div className="leading-none relative text-[28px] md:text-[30px] text-center uppercase font-aktiv">
          <div className="md:hidden">
            {closingLines.mobile.map((line, index) =>
              line ? (
                <p key={`mobile-closing-${index}`} className="mb-1">
                  {line}
                </p>
              ) : (
                <div
                  key={`mobile-closing-gap-${index}`}
                  className="h-[32px]"
                  aria-hidden="true"
                />
              )
            )}
          </div>
          <div className="hidden md:block">
            {closingLines.desktop.map((line, index) => (
              <p key={`desktop-closing-${index}`} className="mb-2">
                {line}
              </p>
            ))}
          </div>
        </div>
      </AktivReveal>
    </section>
  );
}

export function DesktopFooterSection() {
  return (
    <section className="bg-white flex flex-col justify-center items-center h-[157px] md:h-(--footer-white-height) w-full">
      <div className="h-[47px] md:h-[91px] w-[141px] md:w-[273px]">
        <Image
          alt=""
          className="block size-full"
          src={ASSETS.logoBottom}
          width={273}
          height={91}
        />
      </div>
      <div className="mt-[40px] flex flex-col text-[#d9d9d9] text-[14px] text-center uppercase w-full font-aktiv">
        <p className="leading-[normal]">© 2026 OHR All rights reserved.</p>
      </div>
    </section>
  );
}
