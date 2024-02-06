import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

export default function Footer (): JSX.Element {
  return (
    <footer className='w-full border-t-2 border-dark font-medium text-lg'>
      <Layout className='pt-8 flex items-center justify-between'>
        <span>
          {new Date().getFullYear()} &copy; Todos os direitos reservados
        </span>
        <div className='flex items-center'>
          Feito por
          <span className='text-primary text-2xl px-1'>&#9825;</span>
          by &nbsp;
          <Link
            href="/"
            className='underline underline-offset-2'
            target='_blank'
          >
            Joaorocha07
          </Link>
        </div>
        <Link href="/" target='_blank'>Diga Olá</Link>
      </Layout>
    </footer>
  )
}
