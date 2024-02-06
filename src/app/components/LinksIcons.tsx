import React from 'react'
import styles from '../../styles/logo.module.css'
import Link from 'next/link'
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon
} from './Icons'

export default function LinksIcons (): JSX.Element {
  return (
    <>
      <Link
        href="https://twitter.com"
        target={'_blank'} rel="noreferrer"
        className={`${styles.twitter_link} w-6 mr-3`}
      >
        <TwitterIcon />
      </Link>
      <Link
        href="https://twitter.com"
        target={'_blank'}
        rel="noreferrer"
        className={`${styles.twitter_link} w-6 mx-3`}
      >
        <GithubIcon />
      </Link>
      <Link
        href="https://twitter.com"
        target={'_blank'}
        rel="noreferrer"
        className={`${styles.twitter_link} w-6 mx-3`}
      >
        <LinkedInIcon />
      </Link>
      <Link
        href="https://twitter.com"
        target={'_blank'}
        rel="noreferrer"
        className={`${styles.twitter_link} w-6 mx-3`}
      >
        <PinterestIcon />
      </Link>
      <Link
        href="https://twitter.com"
        target={'_blank'}
        rel="noreferrer"
        className={`${styles.twitter_link} w-6 ml-3`}
      >
        <DribbbleIcon />
      </Link>
    </>
  )
}
