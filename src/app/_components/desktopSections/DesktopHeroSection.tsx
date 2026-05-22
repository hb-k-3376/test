import Image from 'next/image';
import { ASSETS } from '../ohrContent';

export function DesktopHeroSection() {
  return (
    <section className="relative flex flex-col gap-[10px] items-center justify-center w-full h-(--hero-height)">
      <div className="h-full relative shrink-0 w-full">
        <Image
          alt=""
          className="absolute inset-0 object-cover pointer-events-none size-full hidden md:block"
          src={ASSETS.hero}
          fill
          priority
          sizes="100vw"
        />
        <Image
          alt=""
          className="absolute inset-0 object-cover pointer-events-none size-full md:hidden"
          src={ASSETS.moHero}
          fill
          priority
          sizes="100vw"
          style={{
            objectPosition: '50% 0%',
            transform: 'translateY(-55px)',
            transformOrigin: 'center top',
          }}
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
