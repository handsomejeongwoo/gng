'use client'

import { useMemo, useState } from 'react'

type Lang = 'ko' | 'en' | 'ja'

const copy = {
  ko: {
    nav: ['수수료', '입점 절차', '후기', 'FAQ', '상담신청'],
    phone: '전화 상담',
    heroKicker: 'PG 본사가 인정하는 정식 등록 결제대행',
    heroTitle: 'Good&Good, 결제 도입을 더 빠르고 명확하게.',
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
    reviewsTitle: '가맹점이 기대하는 것은 복잡한 설명보다 빠른 판단입니다.',
    reviews: [
      ['온라인몰', '결제 도입 가능 여부와 예상 조건을 빠르게 확인할 수 있었습니다.'],
      ['프랜차이즈', '매장 운영 방식에 맞는 결제 방식을 비교해서 안내받았습니다.'],
      ['소상공인', '필요한 서류와 절차가 명확해서 준비 시간이 줄었습니다.'],
    ],
    faqTitle: '자주 묻는 질문',
    faqs: [
      ['상담 비용이 있나요?', '초기 상담은 부담 없이 문의할 수 있도록 진행합니다.'],
      ['신규 사업자도 가능한가요?', '업종과 판매 방식에 따라 가능 여부를 먼저 확인합니다.'],
      ['수수료는 바로 확정되나요?', '매출 규모, 결제 수단, 정산 조건 확인 후 안내합니다.'],
      ['온라인과 오프라인 모두 가능한가요?', '쇼핑몰, 매장, 링크결제 등 운영 방식에 맞춰 상담합니다.'],
    ],
    contactTitle: '가맹점 상담신청',
    contactBody: '담당자가 확인 후 연락드립니다. 빠른 상담이 필요하면 전화 상담을 이용해 주세요.',
    form: ['회사명', '담당자명', '연락처', '업종', '월 예상 매출', '문의 내용'],
    placeholders: ['굿앤굿상점', '홍길동', '010-0000-0000', '온라인 쇼핑몰', '예: 5,000만원', '필요한 결제 방식이나 현재 상황을 남겨주세요.'],
    agree: '개인정보 수집 및 상담 연락에 동의합니다.',
    submit: '상담 접수하기',
    center: '고객센터',
  },
  en: {
    nav: ['Fees', 'Onboarding', 'Reviews', 'FAQ', 'Contact'],
    phone: 'Call',
    heroKicker: 'Registered payment agency recognized by PG partners',
    heroTitle: 'Good&Good Pay makes payment onboarding clearer.',
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
    reviewsTitle: 'Merchants need fast decisions, not complicated explanations.',
    reviews: [
      ['E-commerce', 'We quickly checked available payment options and expected terms.'],
      ['Franchise', 'We compared payment methods for store operations.'],
      ['Local store', 'Clear document guidance reduced preparation time.'],
    ],
    faqTitle: 'FAQ',
    faqs: [
      ['Is there a consultation fee?', 'Initial consultation is available without burden.'],
      ['Can new businesses apply?', 'Eligibility depends on category and sales model.'],
      ['Are fees confirmed immediately?', 'Fees are guided after reviewing volume and terms.'],
      ['Do you support online and offline?', 'We consult for stores, shops, and link payments.'],
    ],
    contactTitle: 'Merchant consultation',
    contactBody: 'A manager will contact you after review. For urgent cases, use phone consultation.',
    form: ['Company', 'Name', 'Phone', 'Business type', 'Monthly volume', 'Message'],
    placeholders: ['Good Store', 'Jane Kim', '010-0000-0000', 'Online store', 'e.g. KRW 50M', 'Tell us your payment needs or current situation.'],
    agree: 'I agree to collection of personal information for consultation.',
    submit: 'Submit request',
    center: 'Customer center',
  },
  ja: {
    nav: ['手数料', '導入手順', '事例', 'FAQ', '相談申込'],
    phone: '電話相談',
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
    reviewsTitle: '加盟店が求めるのは複雑な説明より早い判断です。',
    reviews: [
      ['オンライン', '導入可否と予想条件を早く確認できました。'],
      ['フランチャイズ', '店舗運営に合う決済方式を比較できました。'],
      ['小規模店舗', '必要書類と手順が明確で準備時間が短縮されました。'],
    ],
    faqTitle: 'よくある質問',
    faqs: [
      ['相談費用はありますか？', '初期相談はお気軽にお問い合わせいただけます。'],
      ['新規事業者も可能ですか？', '業種と販売方式により可否を確認します。'],
      ['手数料はすぐ確定しますか？', '売上規模、決済手段、精算条件を確認後ご案内します。'],
      ['オンラインと実店舗の両方が可能ですか？', 'ショップ、店舗、リンク決済などに合わせて相談します。'],
    ],
    contactTitle: '加盟店相談申込',
    contactBody: '担当者が確認後ご連絡します。お急ぎの場合は電話相談をご利用ください。',
    form: ['会社名', '担当者名', '連絡先', '業種', '月間予想売上', 'お問い合わせ内容'],
    placeholders: ['Good Store', '山田太郎', '010-0000-0000', 'オンラインショップ', '例: 5,000万円', '必要な決済方式や現在の状況をご記入ください。'],
    agree: '個人情報の収集および相談連絡に同意します。',
    submit: '相談を申し込む',
    center: 'カスタマーセンター',
  },
} satisfies Record<Lang, Record<string, any>>

export default function Home() {
  const [lang, setLang] = useState<Lang>('ko')
  const t = copy[lang]
  const navIds = useMemo(() => ['fees', 'process', 'reviews', 'faq', 'contact'], [])

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="굿앤굿페이 home">
          <img className="brand-logo" src="/images/logo.jpeg" alt="굿앤굿페이" />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {t.nav.map((item: string, index: number) => (
            <a key={item} href={`#${navIds[index]}`}>
              {item}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <div className="lang-switch" aria-label="Language switch">
            {(['ko', 'en', 'ja'] as Lang[]).map((item) => (
              <button key={item} className={lang === item ? 'active' : ''} onClick={() => setLang(item)}>
                {item.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="phone-link" href="tel:01045002434">
            {t.phone}
          </a>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">{t.heroKicker}</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-body">{t.heroBody}</p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              {t.primaryCta}
            </a>
            <a className="secondary-button" href="tel:01045002434">
              {t.secondaryCta}
            </a>
          </div>
          <p className="hero-note">{t.note}</p>
        </div>
        <div className="hero-metrics" aria-label="Trust metrics">
          {t.stats.map(([value, label]: string[]) => (
            <div key={label} className="metric">
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="fees" className="content-section split-section">
        <div>
          <p className="section-kicker">Fee Guide</p>
          <h2>{t.feesTitle}</h2>
          <p>{t.feesBody}</p>
        </div>
        <div className="fee-table">
          {t.feeRows.map(([type, method, condition]: string[]) => (
            <div key={type} className="fee-row">
              <span>{type}</span>
              <span>{method}</span>
              <strong>{condition}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="content-section">
        <p className="section-kicker">Process</p>
        <h2>{t.processTitle}</h2>
        <div className="step-grid">
          {t.process.map(([title, desc]: string[], index: number) => (
            <article key={title} className="step-card">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="reviews" className="content-section muted-section">
        <p className="section-kicker">Merchant Voice</p>
        <h2>{t.reviewsTitle}</h2>
        <div className="review-grid">
          {t.reviews.map(([type, quote]: string[]) => (
            <article key={type} className="review-card">
              <span>{type}</span>
              <p>{quote}</p>
            </article>
          ))}
        </div>
        <div className="partner-strip" aria-label="Partner placeholders">
          <span>PG Partner</span>
          <span>Card Network</span>
          <span>Commerce</span>
          <span>Offline Store</span>
        </div>
      </section>

      <section id="faq" className="content-section faq-section">
        <div className="faq-heading">
          <p className="section-kicker">FAQ</p>
          <h2>{t.faqTitle}</h2>
        </div>
        <div className="faq-list">
          {t.faqs.map(([question, answer]: string[]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-copy">
          <p className="section-kicker">Contact</p>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactBody}</p>
          <div className="center-box">
            <span>{t.center}</span>
            <strong>010.4500.2434</strong>
            <small>대표 최석곤 · 평일 09:00 - 18:00</small>
          </div>
        </div>
        <form className="contact-form">
          {t.form.slice(0, 5).map((label: string, index: number) => (
            <label key={label}>
              <span>{label}</span>
              <input placeholder={t.placeholders[index]} />
            </label>
          ))}
          <label className="wide-field">
            <span>{t.form[5]}</span>
            <textarea rows={4} placeholder={t.placeholders[5]} />
          </label>
          <label className="agree-field">
            <input type="checkbox" />
            <span>{t.agree}</span>
          </label>
          <button type="button" className="primary-button form-button">
            {t.submit}
          </button>
        </form>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <strong>Good&Good</strong>
          <span>푸터 내용 1</span>
          <span>푸터 내용 2</span>
        </div>
        <div className="footer-contact">
          <span>대표 최석곤</span>
          <a href="tel:01045002434">전화 010.4500.2434</a>
        </div>
      </footer>
    </main>
  )
}
