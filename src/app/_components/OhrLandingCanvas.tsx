import type { CSSProperties } from 'react';
import Image from 'next/image';

const ASSETS = {
  hero: '/images/ohr/hero.jpg',
  mission: '/images/ohr/mission.jpg',
  global: '/images/ohr/global.jpg',
  office: '/images/ohr/office.jpg',
  capability1: '/images/ohr/capability-1.jpg',
  capability2: '/images/ohr/capability-2.jpg',
  capability3: '/images/ohr/capability-3.jpg',
  logoBottom: '/images/ohr/logo-bottom.svg',
  logoTop: '/images/ohr/logo-top.svg',
};

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

const KEY_CAPABILITIES = [
  {
    title: ['Global', 'supply chain'],
    detail:
      'cGMP 인증 획득한 제조 파트너와의 전략적 협력으로 글로벌 수준의 생산 표준을 확보했습니다. 4,800평 대규모 제조 시설을 통해 대량 생산 체계를 갖추고 있으며, 이는 글로벌 시장 수요에 신속하게 대응할 수 있는 경쟁력입니다.',
    image: ASSETS.capability1,
  },
  {
    title: ['Technology', 'driven'],
    detail:
      '자체 R&D 역량 강화를 위해, 차별화된 성분 개발, 특허 기술 확보, 글로벌 임상 데이터 구축을 단계적으로 추진하고 있습니다. 이를 통해 독자적인 제품 경쟁력을 확보하고 글로벌 시장에서의 차별화된 입지를 강화해나갈 것입니다.',
    image: ASSETS.capability2,
  },
  {
    title: ['brand haus'],
    detail:
      '브랜드하우스 모델을 통해 자체 브랜드 개발과 글로벌 브랜드 큐레이션을 동시에 추진함으로써, 다양한 시장 세그먼트를 포괄합니다. 이는 글로벌 고객층의 다양한 니즈를 충족시키고, 포트폴리오 전반의 시너지를 극대화합니다.',
    image: ASSETS.capability3,
  },
] as const;

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
    <section className="relative content-stretch flex flex-col gap-[39px] h-(--overlay-height) items-center justify-center pb-[253px] pt-[252px] px-[293px] w-full max-md:gap-2 max-md:px-6 max-md:py-10">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <Image
          alt=""
          className="absolute object-cover size-full"
          src={imageSrc}
          fill
          sizes="(max-width: 768px) 100vw, 1440px"
        />
        <div className={`absolute inset-0 ${overlayClassName}`} />
      </div>
      <p className="leading-[normal] relative shrink-0 text-[30px] text-center text-white uppercase w-[852px] font-aktiv max-md:w-full max-md:text-[16px]">
        {title}
      </p>
      <div
        className={`leading-0 relative shrink-0 text-[18px] text-center text-white tracking-[-0.36px] uppercase whitespace-pre-wrap font-pretendard font-medium max-md:w-full max-md:text-[12px] max-md:tracking-[-0.24px] ${bodyWidthClassName}`}
      >
        {bodyLines.map((line, index) => (
          <p
            key={`${title}-body-${line.slice(0, 12)}-${index}`}
            className={
              index === bodyLines.length - 1
                ? 'leading-[32px] max-md:leading-[20px]'
                : 'leading-[32px] mb-0 max-md:leading-[20px]'
            }
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
            sizes="(max-width: 768px) 100vw, (min-width: 1440px) 33vw, 100vw"
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
    <section className="bg-white flex flex-col items-center h-(--footer-white-height) w-full pt-[89px] max-md:pt-[50px]">
      <div className="mx-auto h-[91px] w-[273px] max-md:h-[58px] max-md:w-[174px]">
        <Image
          alt=""
          className="block size-full"
          src={ASSETS.logoBottom}
          width={273}
          height={91}
        />
      </div>
      <div className="mt-[23px] flex flex-col h-[32px] justify-end text-[#d9d9d9] text-[14px] text-center uppercase w-[666px] font-aktiv max-md:mt-4 max-md:w-full max-md:px-6 max-md:text-[10px]">
        <p className="leading-[normal]">© 2026 OHR All rights reserved.</p>
      </div>
    </section>
  );
}

export default function OhrLandingCanvas() {
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
      data-node-id="146:3"
    >
      <section
        className="relative content-stretch flex flex-col gap-[10px] items-center justify-center w-full h-(--hero-height)"
        data-node-id="146:4"
      >
        <div className="h-full relative shrink-0 w-full" data-node-id="146:5">
          <Image
            alt=""
            className="absolute inset-0 object-cover pointer-events-none size-full"
            src={ASSETS.hero}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 1440px"
          />
        </div>
        <div className="-translate-x-1/2 absolute h-[31px] left-[calc(50%+0.5px)] top-[54px] w-[93px] max-md:h-[24px] max-md:w-[72px] max-md:top-4">
          <Image
            alt=""
            className="absolute block inset-0 size-full"
            src={ASSETS.logoTop}
            fill
            sizes="(max-width: 768px) 72px, 93px"
          />
        </div>
      </section>

      <section
        className="bg-white content-stretch flex flex-col gap-[39px] h-(--intro-height) items-center justify-center pb-[253px] pt-[252px] px-[293px] w-full max-md:gap-5 max-md:px-6 max-md:py-10"
        data-node-id="146:8"
      >
        <div className="relative shrink-0 text-[50px] text-black text-center uppercase w-[852px] font-aktiv max-md:w-full max-md:text-[30px]">
          <p className="leading-[normal] mb-0">{`DEFINING WHAT'S `}</p>
          <p className="leading-[normal]">NEXT IN BEAUTY</p>
        </div>
        <div className="relative shrink-0 text-[30px] tracking-[-0.6px] text-black text-center w-[852px] font-pretendard font-semibold max-md:w-full max-md:text-[20px] max-md:tracking-[-0.2px]">
          <p className="leading-[46px] mb-0 max-md:leading-[34px]">{`우리는 아름다움의 가능성을 믿습니다.`}</p>
          <p className="leading-[46px] mb-0 max-md:leading-[34px]">{`다양한 피부 타입, 문화, 니즈를 이해하고,`}</p>
          <p className="leading-[46px] max-md:leading-[34px]">
            과학 기반의 맞춤형 솔루션으로 글로벌 뷰티 시장을 주도합니다.
          </p>
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
        <p className="leading-[normal] not-italic text-[50px] text-black text-center uppercase w-[852px] font-aktiv max-md:w-full max-md:px-6 max-md:text-[30px]">
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

      <section className="h-(--office-section-height) flex items-center justify-center max-md:px-3">
        <div className="relative content-stretch flex flex-col gap-[35px] h-(--office-card-height) items-center justify-center px-[15px] py-[29px] rounded-[15px] w-[1372px] max-md:w-full max-md:gap-3 max-md:px-4 max-md:py-6">
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-[15px]"
          >
            <Image
              alt=""
              className="absolute object-cover rounded-[15px] size-full"
              src={ASSETS.office}
              fill
              sizes="(max-width: 768px) 100vw, 1372px"
            />
            <div className="absolute bg-[rgba(0,0,0,0.61)] inset-0 rounded-[15px]" />
          </div>
          <p className="leading-[normal] relative shrink-0 text-[30px] text-center text-white uppercase w-[290px] font-aktiv max-md:text-[20px]">
            HEAD OFFICE
          </p>
          <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
            <p className="leading-[32px] relative shrink-0 text-[18px] text-center text-white tracking-[-0.36px] uppercase w-[1021px] font-pretendard font-medium max-md:w-full max-md:text-[12px] max-md:leading-[20px] max-md:tracking-[-0.24px]">
              경기도 김포시 태장로 751, A동 425호
            </p>
          </div>
          <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
            <p className="leading-[normal] relative shrink-0 text-[18px] text-center text-white uppercase whitespace-nowrap font-aktiv max-md:text-[12px]">
              Tel 031-1234-5678
            </p>
          </div>
          <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
            <p className="leading-[normal] relative shrink-0 text-[18px] text-center text-white uppercase whitespace-nowrap font-aktiv max-md:text-[12px]">
              HYUNSUN.OHRBEAUTY@GMAIL.COM
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black content-stretch flex flex-col h-(--footer-dark-height) items-center justify-center pb-[253px] pt-[252px] px-[293px] w-full max-md:px-6 max-md:py-10">
        <div className="leading-0 relative shrink-0 text-[30px] text-center text-white uppercase w-[852px] whitespace-pre-wrap font-aktiv max-md:w-full max-md:text-[20px]">
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
