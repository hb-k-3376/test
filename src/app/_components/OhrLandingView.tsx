import OhrLandingDesktop from './OhrLandingDesktop';
import OhrLandingMobile from './OhrLandingMobile';

export default function OhrLandingView() {
  return (
    <>
      <div className="max-[1280px]:hidden">
        <OhrLandingDesktop />
      </div>
      <div className="min-[1281px]:hidden">
        <OhrLandingMobile />
      </div>
    </>
  );
}
