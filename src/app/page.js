import About from './components/About'
import Arrivals from './components/Arrival/Arrivals'
import BSellers from './components/BSellers/BSellers'
import Collection from './components/Collection/Collection'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Lookbook from './components/LookBook/Lookbook'
import SlideBanner from './components/SlideBanner'

export default function Home() {
  return (
    <>
      <Header/>
      <main className='space-y-16 mt-12'>
        <Arrivals/>
        <Collection/>
        <BSellers/>
        <Lookbook/>
        <SlideBanner/>
      </main>
      <About/>
      <Footer/>
    </>
  )
}
