import Image from 'next/image';
import { ASSETS } from '../ohrContent';
import { HEAD_OFFICE } from '../ohrLandingData';

export function DesktopOfficeSection() {
  return (
    <section className="h-[466px] md:h-(--office-section-height) flex items-center justify-center px-[15px] py-5 md:px-9 md:py-9">
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
        <p className="relative z-10 h-[43px] text-white text-[12px] md:text-[18px] text-center uppercase font-aktiv font-medium">
          {HEAD_OFFICE.email}
        </p>
      </div>
    </section>
  );
}
