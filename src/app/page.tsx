import Footer from './components/Footer'
import HireMe from './components/HireMe'
import HomePage from './components/Home'
import Layout from './components/Layout'

export default function Home (): JSX.Element {
  return (
    <>
      <main
        className="flex items-center text-dark w-full min-h-screen"
      >
        <Layout className='pt-0'>
          <HomePage />
          <HireMe />
        </Layout>
      </main>
      <Footer />
    </>
  )
}
