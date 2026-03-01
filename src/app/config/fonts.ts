import { Fira_Code, Instrument_Serif, Sora } from 'next/font/google'

export const fontSans = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
})

export const fontSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-instrument-serif',
})

export const fontMono = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
})

export const fontBodyClassNames = `${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} font-sans antialiased`
