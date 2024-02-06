import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'My page about'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element {
  return (
    <div>{children}</div>
  )
}
