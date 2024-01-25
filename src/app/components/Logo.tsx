import Link from 'next/link'
import React from 'react'
import styles from '../../styles/logo.module.css'

const Logo = (): JSX.Element => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <Link
        href="/"
        className='
          w-16 h-16 bg-dark text-light
          flex items-center justify-center rounded-full
          text-2xl font-bold
        '
      >
        <p className={styles.logo}>
          JR
        </p>
      </Link>
    </div>
  )
}

export default Logo
