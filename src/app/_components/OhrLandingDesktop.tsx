import type { CSSProperties } from 'react';
import Image from 'next/image';
import { ASSETS, KEY_CAPABILITIES } from './ohrContent';

const LAYOUT = {
  canvasWidth: 1440,
  heroHeight: 860,
  introHeight: 746,
  overlayHeight: 746,
  keyTitleHeight: 220,
  keyCardsHeight: 632,
  officeSectionHeight: 852,
  officeCardHeight: 574,
  footerDarkHeight: 746,
  footerWhiteHeight: 274,
} as const;

type OverlaySectionProps = {
  imageSrc: string;
  overlayClassName: string;
  title: string;
  bodyLines: string[];
  bodyWidthClassName: string;
};

function OverlaySection({
  imageSrc,
  overlayClassName,
  title,
  bodyLines,
  bodyWidthClassName,
}: OverlaySectionProps) {
  return (
    <section className="relative content-stretch flex flex-col gap-[39px] h-(--overlay-height) items-center justify-center pb-[253px] pt-[252px] px-[293px] w-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <Image
          alt=""
          className="absolute object-cover size-full"
          src={imageSrc}
          fill
          sizes="1440px"
        />
        <div className={`absolute inset-0 ${overlayClassName}`} />
      </div>
      <p className="leading-[normal] relative shrink-0 text-[30px] text-center text-white uppercase w-[852px] font-aktiv">
        {title}
      </p>
      <div
        className={`leading-0 relative shrink-0 text-[18px] text-center text-white tracking-[-0.36px] uppercase whitespace-pre-wrap font-pretendard font-medium ${bodyWidthClassName}`}
      >
        {bodyLines.map((line, index) => (
          <p
            key={`${title}-body-${line.slice(0, 12)}-${index}`}
            className={index === bodyLines.length - 1 ? 'leading-[32px]' : 'leading-[32px] mb-0'}
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}

function KeyCapabilitiesSection() {
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
            <div className="key-capability-title font-aktiv whitespace-pre-wrap">
              {capability.title.map((line) => (
                <p key={line} className="leading-[normal] mb-0 last:mb-0 w-[380px]">
                  {line}
                </p>
              ))}
            </div>
            <p className="key-capability-detail font-pretendard font-medium w-[380px]">
              {capability.detail}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}

function FooterSection() {
  return (
    <section className="bg-white flex flex-col items-center h-(--footer-white-height) w-full pt-[89px]">
      <div className="mx-auto h-[91px] w-[273px]">
        <Image alt="" className="block size-full" src={ASSETS.logoBottom} width={273} height={91} />
      </div>
      <div className="mt-[23px] flex flex-col h-[32px] justify-end text-[#d9d9d9] text-[14px] text-center uppercase w-[666px] font-aktiv">
        <p className="leading-[normal]">© 2026 OHR All rights reserved.</p>
      </div>
    </section>
  );
}

export default function OhrLandingDesktop() {
  return (
    <div
      className="ohr-page mx-auto bg-white"
      style={
        {
          '--canvas-width': `${LAYOUT.canvasWidth}px`,
          '--hero-height': `${LAYOUT.heroHeight}px`,
          '--intro-height': `${LAYOUT.introHeight}px`,
          '--overlay-height': `${LAYOUT.overlayHeight}px`,
          '--key-title-height': `${LAYOUT.keyTitleHeight}px`,
          '--key-cards-height': `${LAYOUT.keyCardsHeight}px`,
          '--office-section-height': `${LAYOUT.officeSectionHeight}px`,
          '--office-card-height': `${LAYOUT.officeCardHeight}px`,
          '--footer-dark-height': `${LAYOUT.footerDarkHeight}px`,
          '--footer-white-height': `${LAYOUT.footerWhiteHeight}px`,
        } as CSSProperties
      }
    >
      <section className="relative content-stretch flex flex-col gap-[10px] items-center justify-center w-full h-(--hero-height)">
        <div className="h-full relative shrink-0 w-full">
          <Image
            alt=""
            className="absolute inset-0 object-cover pointer-events-none size-full"
            src={ASSETS.hero}
            fill
            priority
            sizes="1440px"
          />
        </div>
        <div className="-translate-x-1/2 absolute h-[31px] left-[calc(50%+0.5px)] top-[54px] w-[93px]">
          <Image alt="" className="absolute block inset-0 size-full" src={ASSETS.logoTop} fill sizes="93px" />
        </div>
      </section>

      <section className="bg-white content-stretch flex flex-col gap-[39px] h-(--intro-height) items-center justify-center pb-[253px] pt-[252px] px-[293px] w-full">
        <div className="relative shrink-0 text-[50px] text-black text-center uppercase w-[852px] font-aktiv">
          <p className="leading-[normal] mb-0">{`DEFINING WHAT'S `}</p>
          <p className="leading-[normal]">NEXT IN BEAUTY</p>
        </div>
        <div className="relative shrink-0 text-[30px] tracking-[-0.6px] text-black text-center w-[852px] font-pretendard font-semibold">
          <p className="leading-[46px] mb-0">{`우리는 아름다움의 가능성을 믿습니다.`}</p>
          <p className="leading-[46px] mb-0">{`다양한 피부 타입, 문화, 니즈를 이해하고,`}</p>
          <p className="leading-[46px]">과학 기반의 맞춤형 솔루션으로 글로벌 뷰티 시장을 주도합니다.</p>
        </div>
      </section>

      <OverlaySection
        imageSrc={ASSETS.mission}
        overlayClassName="bg-[rgba(0,0,0,0.5)]"
        title="What Drives Us Forward"
        bodyLines={[
          '우리는 전 세계 소비자의 일상에 가장 매끄럽게 스며드는 아름다움을 연구합니다.',
          '고객이 마주하는 모든 순간을 더 가치 있게 만들기 위해,',
          '우리는 오늘도 주도적으로 미(美)의 지평을 넓혀갑니다.',
        ]}
        bodyWidthClassName="w-[909px]"
      />

      <section className="h-(--key-title-height) flex items-center justify-center">
        <p className="leading-[normal] not-italic text-[50px] text-black text-center uppercase w-[852px] font-aktiv">
          KEY CAPABILITIES
        </p>
      </section>

      <KeyCapabilitiesSection />

      <OverlaySection
        imageSrc={ASSETS.global}
        overlayClassName="bg-[rgba(0,0,0,0.42)]"
        title="Beyond Korea to the global market"
        bodyLines={[
          'OHR은 한국 시장에서의 탄탄한 기반을 바탕으로 북미 뷰티 시장 진출을 본격화합니다.',
          '현지화된 전략과 글로벌 스탠다드를 충족하는 품질로 세계의 기준이 되겠습니다.',
        ]}
        bodyWidthClassName="w-[852px]"
      />

      <section className="h-(--office-section-height) flex items-center justify-center">
        <div className="relative content-stretch flex flex-col gap-[35px] h-(--office-card-height) items-center justify-center px-[15px] py-[29px] rounded-[15px] w-[1372px]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[15px]">
            <Image
              alt=""
              className="absolute object-cover rounded-[15px] size-full"
              src={ASSETS.office}
              fill
              sizes="1372px"
            />
            <div className="absolute bg-[rgba(0,0,0,0.61)] inset-0 rounded-[15px]" />
          </div>
          <p className="leading-[normal] relative shrink-0 text-[30px] text-center text-white uppercase w-[290px] font-aktiv">
            HEAD OFFICE
          </p>
          <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
            <p className="leading-[32px] relative shrink-0 text-[18px] text-center text-white tracking-[-0.36px] uppercase w-[1021px] font-pretendard font-medium">
              경기도 김포시 태장로 751, A동 425호
            </p>
          </div>
          <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
            <p className="leading-[normal] relative shrink-0 text-[18px] text-center text-white uppercase whitespace-nowrap font-aktiv">
              Tel 031-1234-5678
            </p>
          </div>
          <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
            <p className="leading-[normal] relative shrink-0 text-[18px] text-center text-white uppercase whitespace-nowrap font-aktiv">
              HYUNSUN.OHRBEAUTY@GMAIL.COM
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black content-stretch flex flex-col h-(--footer-dark-height) items-center justify-center pb-[253px] pt-[252px] px-[293px] w-full">
        <div className="leading-0 relative shrink-0 text-[30px] text-center text-white uppercase w-[852px] whitespace-pre-wrap font-aktiv">
          <p className="leading-[normal] mb-0">
            {`The wait is nearly over.`}
            <br aria-hidden="true" />
            {`Something definitive is coming your way.`}
          </p>
          <p className="leading-[normal]">Launching soon.</p>
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
