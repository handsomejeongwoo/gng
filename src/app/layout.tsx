import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '굳앤굳페이 | PG 결제대행 상담',
  description: '온라인 쇼핑몰과 오프라인 매장을 위한 PG 결제대행 상담 랜딩페이지',
  openGraph: {
    title: '굳앤굳페이 | PG 결제대행 상담',
    description: '온라인 쇼핑몰과 오프라인 매장을 위한 PG 결제대행 상담 랜딩페이지',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '굳앤굳페이 | PG 결제대행 상담',
    description: '온라인 쇼핑몰과 오프라인 매장을 위한 PG 결제대행 상담 랜딩페이지',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
