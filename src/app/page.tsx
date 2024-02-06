import Image from 'next/image'
import HireMe from './components/HireMe'
import HomePage from './components/Home'
import Layout from './components/Layout'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'

export default function Home (): JSX.Element {
  return (
    <>
      <main
        className="flex items-center text-dark w-full min-h-screen"
      >
        <Layout className='pt-0'>
          <HomePage />
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24'>
          <Image
            src={lightBulb}
            alt='lightBulb'
            className='w-full h-auto'
          />
        </div>
      </main>
    </>
  )
}
