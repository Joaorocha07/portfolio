import React from 'react'
import Image from 'next/image'
import profilePhoto from './../../../public/images/developer-pic-1.png'
import AnimatedText from '../components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '../components/Icons'

export default function HomePage (): JSX.Element {
  return (
    <div className='flex items-center justify-between w-full'>
      <div className='w-1/2'>
        <Image
          src={profilePhoto}
          alt="ColocarMyPhoto"
          className='w-full h-auto'
        />
      </div>
      <div className='w-1/2 flex flex-col items-center self-center'>
        <AnimatedText
          text='Turning Vision Into Reality With Code And Design.'
          className='!text-6xl !text-left'
        />
        <p className='my-4 text-base font-medium'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Beatae est explicabo saepe, quidem soluta perspiciatis.
              Numquam, eaque obcaecati. Odit, provident porro debitis
              esse recusandae laboriosam praesentium repellendus fuga
              similique cupiditate!
        </p>
        <div className='flex items-center self-start mt-2'>
          <Link
            href="dummy.pdf"
            target='_blank'
            className='
                  flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light
                  hover:text-black border-2 border-solid
                  border-transparent hover:border-dark
                '
            download={true}
          >
                Curriculo
            <LinkArrow className='w-6 ml-1' />
          </Link>
          <Link
            href="mailto:abcd@gmail.com"
            target='_blank'
            className='
                  ml-4 text-lg font-medium capitalize text-dark underline
                '
          >
                Contato
          </Link>
        </div>
      </div>
    </div>
  )
}
