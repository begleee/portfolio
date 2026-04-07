import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { LocaleProvider } from '@/lib/locale-context'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Beglee | Frontend Developer',
  description: 'Frontend developer specializing in React, Next.js, and modern web technologies. Building accessible, pixel-perfect digital experiences.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'JavaScript', 'Web Development', 'Turkmenistan'],
  authors: [{ name: 'Beglee', url: 'https://github.com/begleee' }],
  creator: 'Beglee',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Beglee | Frontend Developer',
    description: 'Frontend developer specializing in React, Next.js, and modern web technologies.',
    siteName: 'Beglee Portfolio',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider>
            {children}
          </LocaleProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
