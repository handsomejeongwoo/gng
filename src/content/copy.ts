export type Lang = 'ko' | 'en' | 'ja'

export type Partner = {
  name: string
  logo: string
}

export const partners: Partner[] = [
  { name: '루시', logo: '/images/lucy.png' },
  { name: '윈글로벌', logo: '/images/winglobal.png' },
  { name: '다우', logo: '/images/daou.png' },
]

export const langs: Lang[] = ['ko', 'en', 'ja']

export const navIds = ['fees', 'process', 'partners', 'contact'] as const

export const contact = {
  phone: '01045002434',
  phoneDisplay: '010.4500.2434',
  owner: '최석곤',
} as const

export const copy = {
  ko: {
    nav: ['수수료', '입점 절차', '협력사', '상담신청'],
    phone: '전화 상담',
    heroTagline: 'PG 결제 대행 전문 서비스',
    heroKicker: 'PG 본사가 인정하는 정식 등록 결제대행',
    heroTitle: '굳앤굳페이, 결제 도입을 더 빠르고 명확하게.',
    heroBody:
      '온라인 쇼핑몰부터 오프라인 매장까지, 업종과 매출 구조에 맞는 결제 조건을 상담하고 입점까지 안내합니다.',
    primaryCta: '가맹점 상담신청',
    secondaryCta: '전화 상담 연결',
    note: '초기 상담 후 업종, 매출, 결제 방식에 맞춰 조건을 안내합니다.',
    stats: [
      ['월 1,000억', '결제 처리 규모'],
      ['정식 등록', 'PG 본사 인정 업체'],
      ['온라인/오프라인', '가맹점 상담 대응'],
      ['1:1 안내', '계약부터 연동까지'],
    ],
    feesTitle: '수수료와 요금은 업종별 조건에 맞춰 안내합니다.',
    feesBody:
      '결제 수단, 업종, 월 매출 규모, 정산 조건에 따라 최적 조건이 달라집니다. 먼저 상담으로 필요한 범위를 확인합니다.',
    feeRows: [
      ['온라인 쇼핑몰', '카드/간편결제', '매출 규모별 협의'],
      ['오프라인 매장', '단말/QR/링크결제', '운영 방식별 협의'],
      ['신규 가맹점', '초기 도입 상담', '입점 가능 여부 확인'],
    ],
    processTitle: '입점 절차',
    process: [
      ['상담 접수', '업종, 매출, 필요한 결제 방식을 확인합니다.'],
      ['조건 검토', 'PG 등록 가능 여부와 수수료 조건을 검토합니다.'],
      ['계약 안내', '필요 서류와 계약 절차를 정리해 안내합니다.'],
      ['결제 도입', '연동 또는 운영 방식에 맞춰 사용을 시작합니다.'],
    ],
    partnersTitle: '굳앤굳페이와 함께하는 협력사',
    contactTitle: '가맹점 상담신청',
    contactBody: '담당자가 확인 후 연락드립니다. 빠른 상담이 필요하면 전화 상담을 이용해 주세요.',
    form: ['회사명', '담당자명', '연락처', '업종', '문의 내용'],
    placeholders: ['굳앤굳상점', '홍길동', '010-0000-0000', '온라인 쇼핑몰', '필요한 결제 방식이나 현재 상황을 남겨주세요.'],
    agree: '개인정보 수집 및 상담 연락에 동의합니다.',
    submit: '상담 접수하기',
    center: '고객센터',
  },
  en: {
    nav: ['Fees', 'Onboarding', 'Partners', 'Contact'],
    phone: 'Call',
    heroTagline: 'PG payment agency service',
    heroKicker: 'Registered payment agency recognized by PG partners',
    heroTitle: '굳앤굳페이 makes payment onboarding clearer.',
    heroBody:
      'We guide online stores and offline merchants through payment options, conditions, and onboarding steps.',
    primaryCta: 'Request consultation',
    secondaryCta: 'Call now',
    note: 'Conditions are reviewed by business type, volume, and payment method.',
    stats: [
      ['KRW 100B/mo', 'Processing scale'],
      ['Registered', 'Recognized PG agency'],
      ['Online/Offline', 'Merchant support'],
      ['1:1 Guide', 'Contract to launch'],
    ],
    feesTitle: 'Fees are guided by business type and operating conditions.',
    feesBody:
      'Rates depend on payment method, business category, monthly volume, and settlement terms.',
    feeRows: [
      ['Online store', 'Card/e-wallet', 'By volume'],
      ['Offline store', 'Terminal/QR/link', 'By operation'],
      ['New merchant', 'Launch consulting', 'Eligibility check'],
    ],
    processTitle: 'Onboarding process',
    process: [
      ['Inquiry', 'We check business type, sales volume, and payment needs.'],
      ['Review', 'We review PG registration and fee conditions.'],
      ['Contract', 'We guide documents and contract steps.'],
      ['Launch', 'You start with the suitable integration or operation flow.'],
    ],
    partnersTitle: 'Partners working with 굳앤굳페이',
    contactTitle: 'Merchant consultation',
    contactBody: 'A manager will contact you after review. For urgent cases, use phone consultation.',
    form: ['Company', 'Name', 'Phone', 'Business type', 'Message'],
    placeholders: ['Good Store', 'Jane Kim', '010-0000-0000', 'Online store', 'Tell us your payment needs or current situation.'],
    agree: 'I agree to collection of personal information for consultation.',
    submit: 'Submit request',
    center: 'Customer center',
  },
  ja: {
    nav: ['手数料', '導入手順', '協力会社', '相談申込'],
    phone: '電話相談',
    heroTagline: 'PG決済代行サービス',
    heroKicker: 'PG本社が認める正式登録決済代行',
    heroTitle: 'グッドアンドグッドペイが決済導入を明確にします。',
    heroBody:
      'オンラインショップから実店舗まで、業種と売上構造に合う決済条件と導入手順をご案内します。',
    primaryCta: '加盟店相談申込',
    secondaryCta: '電話相談',
    note: '業種、売上、決済方式を確認した上で条件をご案内します。',
    stats: [
      ['月1,000億', '決済処理規模'],
      ['正式登録', 'PG本社認定業者'],
      ['オンライン/実店舗', '加盟店相談対応'],
      ['1:1案内', '契約から導入まで'],
    ],
    feesTitle: '手数料と料金は業種別条件に合わせてご案内します。',
    feesBody:
      '決済手段、業種、月間売上、精算条件により最適条件が異なります。',
    feeRows: [
      ['オンラインショップ', 'カード/簡単決済', '売上規模別協議'],
      ['実店舗', '端末/QR/リンク決済', '運営方式別協議'],
      ['新規加盟店', '初期導入相談', '導入可否確認'],
    ],
    processTitle: '導入手順',
    process: [
      ['相談受付', '業種、売上、必要な決済方式を確認します。'],
      ['条件確認', 'PG登録可否と手数料条件を確認します。'],
      ['契約案内', '必要書類と契約手順をご案内します。'],
      ['決済導入', '連携または運営方式に合わせて開始します。'],
    ],
    partnersTitle: 'グッドアンドグッドペイと共に歩む協力会社',
    contactTitle: '加盟店相談申込',
    contactBody: '担当者が確認後ご連絡します。お急ぎの場合は電話相談をご利用ください。',
    form: ['会社名', '担当者名', '連絡先', '業種', 'お問い合わせ内容'],
    placeholders: ['Good Store', '山田太郎', '010-0000-0000', 'オンラインショップ', '必要な決済方式や現在の状況をご記入ください。'],
    agree: '個人情報の収集および相談連絡に同意します。',
    submit: '相談を申し込む',
    center: 'カスタマーセンター',
  },
} satisfies Record<Lang, Record<string, any>>

export type Copy = (typeof copy)[Lang]
