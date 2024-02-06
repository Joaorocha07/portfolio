import React from 'react'
import AnimatedText from '../components/AnimatedText'
import Layout from '../components/Layout'
import Image from 'next/image'
import profilePic from '../../../public/images/developer-pic-2.jpeg'

export default function Home (): JSX.Element {
  return (
    <main className='flex w-full flex-col items-center justify-center'>
      <Layout className='pt-16'>
        <AnimatedText text='Passion Fuels Purpose!' className='mb-16' />
        <div className='grid w-full grid-cols-8 gap-16'>
          <div className='col-span-3 flex flex-col items-start justify-start'>
            <h2
              className='mb-4 text-lg font-bold uppercase text-dark/75'
            >
              Biografia
            </h2>
            <p className='font-medium'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vitae quas voluptate dicta explicabo! Eligendi possimus at
              quis pariatur cupiditate similique, mollitia nulla saepe
              blanditiis enim consectetur dicta, harum aperiam perspiciatis!
            </p>
            <p className='my-4 font-medium'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vitae quas voluptate dicta explicabo! Eligendi possimus at
              quis pariatur cupiditate similique, mollitia nulla saepe
              blanditiis enim consectetur dicta, harum aperiam perspiciatis!
            </p>
            <p className='font-medium'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vitae quas voluptate dicta explicabo! Eligendi possimus at
              quis pariatur cupiditate similique, mollitia nulla saepe
              blanditiis enim consectetur dicta, harum aperiam perspiciatis!
            </p>
          </div>

          <div
            className='
              col-span-3 relative h-max rounded-2xl border-2 border-solid
              border-dark bg-light p-8
            '
          >
            <div
              className='
                absolute top-0 -right-3 -z-10 w-[102%] h-[103%]
                rounded-[2rem] bg-dark
              '
            >
              <Image
                src={profilePic}
                alt='Joaorocha07'
                className='w-full h-auto rounded-2xl'
              />
            </div>
          </div>

          <div className='col-span-2 flex flex-col items-end justify-between'>
            <div>
              <span>50+</span>
              <h2>Satisfied clients</h2>
            </div>
            <div>
              <span>40+</span>
              <h2>Projects completed</h2>
            </div>
            <div>
              <span>4+</span>
              <h2>Year of experiencie</h2>
            </div>
          </div>
        </div>
      </Layout>
    </main>
  )
}
