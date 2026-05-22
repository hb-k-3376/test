export const ASSETS = {
  hero: '/images/ohr/hero.jpg',
  moHero: '/images/ohr/mo-hero.png',
  mission: '/images/ohr/mission.jpg',
  global: '/images/ohr/global.jpg',
  office: '/images/ohr/office.jpg',
  capability1: '/images/ohr/capability-1.jpg',
  capability2: '/images/ohr/capability-2.jpg',
  capability3: '/images/ohr/capability-3.jpg',
  logoBottom: '/images/ohr/logo-bottom.svg',
  logoTop: '/images/ohr/logo-top.svg',
} as const;

export const KEY_CAPABILITIES = [
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
