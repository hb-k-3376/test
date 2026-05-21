import Image from 'next/image';
import { ASSETS, KEY_CAPABILITIES } from './ohrContent';

type MobileOverlaySectionProps = {
  imageSrc: string;
  overlayClassName: string;
  title: string;
  titleClassName?: string;
  bodyLines: string[];
};

function MobileOverlaySection({
  imageSrc,
  overlayClassName,
  title,
  titleClassName,
  bodyLines,
}: MobileOverlaySectionProps) {
  return (
    <section className="relative h-[746px] w-full flex flex-col items-center justify-center gap-[39px] px-[4.198%] pt-[252px] pb-[253px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <Image
          alt=""
          className="absolute inset-0 size-full object-cover"
          src={imageSrc}
          fill
          sizes="(max-width: 413px) 100vw, 413px"
        />
        <div className={`absolute inset-0 ${overlayClassName}`} />
      </div>
      <p
        className={`relative w-[91.603%] text-center text-white uppercase font-aktiv text-[28px] leading-[normal] ${titleClassName ?? ''}`}
      >
        {title}
      </p>
      <div className="relative w-[91.603%] text-center text-white uppercase font-pretendard font-medium text-[16px] tracking-[-0.32px]">
        {bodyLines.map((line, index) => (
          <p key={`${title}-mobile-body-${index}`} className="leading-[32px] mb-0 last:mb-0">
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}

function MobileKeyCapabilitiesSection() {
  return (
    <section className="w-full h-[1221px]">
      {KEY_CAPABILITIES.map((capability) => (
        <article key={capability.title.join('-')} className="relative h-[407px] w-full overflow-hidden">
          <Image
            alt=""
            className="absolute inset-0 size-full object-cover"
            src={capability.image}
            fill
            sizes="(max-width: 413px) 100vw, 413px"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(102, 102, 102, 0) 27.453%, rgba(0, 0, 0, 0.8) 82.911%)',
              backdropFilter: 'blur(20px)',
            }}
          />
          <div className="relative z-1 h-full flex flex-col items-center justify-center gap-[36px] px-0 py-[45px]">
            <div className="w-[91.603%] text-white uppercase font-aktiv text-[24px] leading-[normal]">
              {capability.title.map((line) => (
                <p key={line} className="mb-0 last:mb-0">
                  {line}
                </p>
              ))}
            </div>
            <p className="w-[91.603%] text-white uppercase font-pretendard text-[16px] font-medium leading-[32px] tracking-[-0.32px]">
              {capability.detail}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
}

function MobileFooterSection() {
  return (
    <section className="bg-white h-[157px] w-full pt-[40px] flex flex-col items-center">
      <div className="h-[47px] w-[35.878%]">
        <Image alt="" className="block size-full" src={ASSETS.logoBottom} width={141} height={47} />
      </div>
      <div className="mt-[21px] w-[91.603%] h-[32px] text-center text-[#d9d9d9] text-[14px] uppercase font-aktiv">
        <p className="leading-[normal]">© 2026 OHR All rights reserved.</p>
      </div>
    </section>
  );
}

export default function OhrLandingMobile() {
  return (
    <div className="mx-auto w-full max-w-[413px] min-[373px]:min-w-[373px] bg-white">
      <section className="relative h-[589px] w-full">
        <Image
          alt=""
          className="absolute inset-0 size-full object-cover"
          src={ASSETS.hero}
          fill
          priority
          sizes="(max-width: 413px) 100vw, 413px"
        />
        <div className="-translate-x-1/2 absolute left-1/2 top-[54px] w-[93px] h-[31px]">
          <Image alt="" className="absolute inset-0 size-full" src={ASSETS.logoTop} fill sizes="93px" />
        </div>
      </section>

      <section className="bg-white h-[746px] w-full flex flex-col items-center justify-center gap-[39px] px-[4.198%] pt-[252px] pb-[253px]">
        <div className="w-[91.603%] text-black text-center uppercase font-aktiv text-[28px]">
          <p className="leading-[normal] mb-0">{`DEFINING WHAT'S `}</p>
          <p className="leading-[normal]">NEXT IN BEAUTY</p>
        </div>
        <div className="w-[91.603%] text-black text-center font-pretendard font-semibold text-[16px] tracking-[-0.32px]">
          <p className="leading-[32px] mb-0">{`우리는 아름다움의 가능성을 믿습니다.`}</p>
          <p className="leading-[32px] mb-0">{`다양한 피부 타입, 문화, 니즈를 이해하고,`}</p>
          <p className="leading-[32px]">과학 기반의 맞춤형 솔루션으로 글로벌 뷰티 시장을 주도합니다.</p>
        </div>
      </section>

      <MobileOverlaySection
        imageSrc={ASSETS.mission}
        overlayClassName="bg-[rgba(0,0,0,0.5)]"
        title="What Drives Us Forward"
        bodyLines={[
          '우리는 전 세계 소비자의 일상에',
          '가장 매끄럽게 스며드는 아름다움을 연구합니다.',
          '고객이 마주하는 모든 순간을 더 가치 있게 만들기 위해,',
          '우리는 오늘도 주도적으로 미(美)의 지평을 넓혀갑니다.',
        ]}
      />

      <section className="h-[152px] w-full bg-black flex items-center justify-center">
        <p className="w-[73.282%] text-white text-center uppercase font-aktiv text-[28px] leading-[normal]">
          KEY CAPABILITIES
        </p>
      </section>

      <MobileKeyCapabilitiesSection />

      <MobileOverlaySection
        imageSrc={ASSETS.global}
        overlayClassName="bg-[rgba(0,0,0,0.42)]"
        title="Beyond Korea to the global market"
        titleClassName="text-[30px]"
        bodyLines={[
          'OHR은 한국 시장에서의 탄탄한 기반을 바탕으로',
          '북미 뷰티 시장 진출을 본격화합니다.',
          '현지화된 전략과 글로벌 스탠다드를 충족하는 품질로',
          '세계의 기준이 되겠습니다.',
        ]}
      />

      <section className="h-[466px] w-full px-[3.817%] py-[20px] flex items-center justify-center">
        <div className="relative h-[426px] w-full rounded-[15px] px-[15px] py-[29px] flex flex-col items-center justify-center gap-[35px]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[15px]">
            <Image
              alt=""
              className="absolute inset-0 size-full object-cover rounded-[15px]"
              src={ASSETS.office}
              fill
              sizes="(max-width: 413px) 92vw, 383px"
            />
            <div className="absolute inset-0 rounded-[15px] bg-[rgba(0,0,0,0.61)]" />
          </div>
          <p className="relative w-[73.791%] text-center text-white uppercase font-aktiv text-[28px] leading-[normal]">
            HEAD OFFICE
          </p>
          <div className="relative p-[10px]">
            <p className="w-[91.603%] text-center text-white uppercase font-pretendard font-medium text-[16px] leading-[32px] tracking-[-0.32px]">
              경기도 김포시 태장로 751, A동 425호
            </p>
          </div>
          <div className="relative p-[10px]">
            <p className="text-center text-white uppercase font-aktiv text-[16px] leading-[normal] whitespace-nowrap">
              Tel 031-1234-5678
            </p>
          </div>
          <div className="relative p-[10px]">
            <p className="text-center text-white uppercase font-aktiv text-[14px] leading-[normal] whitespace-nowrap">
              HYUNSUN.OHRBEAUTY@GMAIL.COM
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black h-[750px] w-full flex flex-col items-center justify-center px-[4.198%] pt-[252px] pb-[253px]">
        <div className="w-[91.603%] text-center text-white uppercase font-aktiv text-[28px] leading-[normal]">
          <p className="mb-0">
            {`The wait is nearly over.`}
            <br aria-hidden="true" />
            {`Something definitive is coming your way.`}
          </p>
          <p>Launching soon.</p>
        </div>
      </section>

      <MobileFooterSection />
    </div>
  );
}
