import type {Metadata} from 'next';
import {Playfair_Display, Manrope} from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  weight: ['600', '700', '800'],
  variable: '--font-display',
});

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'С Юбилеем 55 лет, любимая мама Зиля!',
  description:
    'Интерактивная праздничная открытка с 55-летием и выходом в отпуск для любимой мамы Зили от сыновей и папы Фаниса.',
  openGraph: {
    title: 'С Юбилеем 55 лет, любимая мама Зиля!',
    description:
      'Интерактивная праздничная открытка с 55-летием и выходом в отпуск для любимой мамы Зили от сыновей и папы Фаниса.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'С Юбилеем 55 лет, любимая мама Зиля!',
    description:
      'Интерактивная праздничная открытка с 55-летием и выходом в отпуск для любимой мамы Зили от сыновей и папы Фаниса.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ru" className={`${playfair.variable} ${manrope.variable} scroll-smooth`}>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-white font-[family-name:var(--font-sans)] text-stone-900 antialiased selection:bg-orange-500 selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
