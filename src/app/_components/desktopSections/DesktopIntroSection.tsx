import ScrollReveal from '@/util/ScrollReveal';
import AktivReveal from '@/util/AktivReveal';

export function DesktopIntroSection() {
  return (
    <section className="bg-white text-black flex flex-col gap-[39px] h-(--intro-height) items-center justify-center w-full">
      <div className="text-[28px] md:text-[50px] text-center uppercase w-full">
        <AktivReveal>
          <p>
            DEFINING <br aria-hidden="true" className="md:hidden" />
            WHAT&apos;S NEXT
            <br aria-hidden="true" />
            IN BEAUTY
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
