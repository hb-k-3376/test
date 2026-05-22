import type { CSSProperties } from 'react';
import { ASSETS } from './ohrContent';
import {
  CLOSING_LINES_DESKTOP,
  CLOSING_LINES_MOBILE,
  DESKTOP_LAYOUT,
  GLOBAL_BODY_LINES_DESKTOP,
  GLOBAL_BODY_LINES_MOBILE,
  MISSION_BODY_LINES_DESKTOP,
  MISSION_BODY_LINES_MOBILE,
} from './ohrLandingData';
import {
  DesktopClosingSection,
  DesktopFooterSection,
  DesktopHeroSection,
  DesktopIntroSection,
  DesktopKeyCapabilitiesSection,
  DesktopKeyCapabilitiesTitle,
  DesktopOfficeSection,
  DesktopOverlaySection,
} from './OhrLandingDesktopSections';

export default function OhrLandingDesktop() {
  return (
    <div
      style={
        {
          '--hero-height': `${DESKTOP_LAYOUT.heroHeight}vh`,
          '--intro-height': `${DESKTOP_LAYOUT.introHeight}px`,
          '--overlay-height': `${DESKTOP_LAYOUT.overlayHeight}px`,
          '--key-title-height': `${DESKTOP_LAYOUT.keyTitleHeight}px`,
          '--key-cards-height': `${DESKTOP_LAYOUT.keyCardsHeight}px`,
          '--office-section-height': `${DESKTOP_LAYOUT.officeSectionHeight}px`,
          '--footer-dark-height': `${DESKTOP_LAYOUT.footerDarkHeight}px`,
          '--footer-white-height': `${DESKTOP_LAYOUT.footerWhiteHeight}px`,
        } as CSSProperties
      }
    >
      <DesktopHeroSection />
      <DesktopIntroSection />
      <DesktopOverlaySection
        imageSrc={ASSETS.mission}
        overlayClassName="bg-[rgba(0,0,0,0.5)]"
        titleLines={{
          desktop: ['What Drives Us Forward'],
          mobile: ['What Drives', 'Us Forward'],
        }}
        bodyLines={{
          desktop: MISSION_BODY_LINES_DESKTOP,
          mobile: MISSION_BODY_LINES_MOBILE,
        }}
      />
      <DesktopKeyCapabilitiesTitle />
      <DesktopKeyCapabilitiesSection />
      <DesktopOverlaySection
        imageSrc={ASSETS.global}
        overlayClassName="bg-[rgba(0,0,0,0.42)]"
        titleLines={{
          desktop: ['Beyond Korea to the global market'],
          mobile: ['Beyond', 'Korea to the', 'global market'],
        }}
        bodyLines={{
          desktop: GLOBAL_BODY_LINES_DESKTOP,
          mobile: GLOBAL_BODY_LINES_MOBILE,
        }}
      />
      <DesktopOfficeSection />
      <DesktopClosingSection
        closingLines={{
          desktop: CLOSING_LINES_DESKTOP,
          mobile: CLOSING_LINES_MOBILE,
        }}
      />
      <DesktopFooterSection />
    </div>
  );
}
