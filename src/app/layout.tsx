import '../styles/globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import NavBar from './components/NavBar'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont'
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My first portfolio'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <html lang="pt-br">
      <body
        className={`
          ${montserrat.variable} font-mont bg-light w-full min-h-screen
        `}
      >
        <NavBar />
        {children}
      </body>
    </html>
  )
}
