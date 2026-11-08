import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import './globals.css'

const notoSansKhmer = localFont({
  src: '../public/fonts/NotoSansKhmer.ttf',
  weight: '100 900',
  variable: '--font-noto-sans-khmer',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'KhmerGigs — Find Jobs That Fit You',
  description:
    'KhmerGigs recommends jobs across Cambodia based on your preferences. Answer three quick questions and get matched to full-time, part-time, internship and freelance roles.',
  generator: 'v0.app',
  applicationName: 'KhmerGigs',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#2f6fed',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${notoSansKhmer.variable}`} suppressHydrationWarning>
      <body className="bg-background font-sans antialiased">
        {/* Telegram WebApp SDK — exposes window.Telegram.WebApp inside Telegram.
            No bot token is ever used on the client. Loaded before the app is
            interactive so the user id is available on first render. */}
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
