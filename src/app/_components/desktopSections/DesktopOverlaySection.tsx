import Image from 'next/image';
import ScrollReveal from '@/util/ScrollReveal';
import AktivReveal from '@/util/AktivReveal';

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
