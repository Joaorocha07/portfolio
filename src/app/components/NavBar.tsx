'use client'

import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { type CustomLinkProps } from '@/types/Home/logo'
import LinksIcons from './LinksIcons'

const CustomLink = ({
  href,
  title,
  className = ''
}: CustomLinkProps): JSX.Element => {
  return (
    <Link
      href={href}
      className={`${className} relative group`}
    >
      {title}
      <span
        className={`
          h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${typeof window !== 'undefined' &&
            window.location.pathname === href
      ? 'w-full'
      : 'w-0'}
          `}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const NavBar = (): JSX.Element => {
  return (
    <header
      className='
        w-full px-32 py-8 font-medium flex items-center justify-between
      '
    >
      <nav>
        <CustomLink href="/" title="Home" className='mr-4' />
        <CustomLink href="/sobre" title="Sobre" className='mx-4' />
        <CustomLink href="/projetos" title="Projetos" className='mx-4' />
        <CustomLink href="/artigos" title="Artigos" className='ml-4' />
      </nav>

      <nav className='flex items-center justify-center flex-wrap'>
        <LinksIcons />
      </nav>

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar
