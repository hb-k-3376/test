import Image from 'next/image';
import { ASSETS } from '../ohrContent';

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
