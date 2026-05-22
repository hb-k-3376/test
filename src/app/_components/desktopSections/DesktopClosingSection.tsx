import AktivReveal from '@/util/AktivReveal';

type DesktopClosingSectionProps = {
  closingLines: { desktop: readonly string[]; mobile: readonly string[] };
};

export function DesktopClosingSection({ closingLines }: DesktopClosingSectionProps) {
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
