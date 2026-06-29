import Cursor    from './components/Cursor'
import Nav       from './components/Nav'
import Hero      from './components/Hero'
import Ticker    from './components/Ticker'
import About     from './components/About'
import Services  from './components/Services'
import Portfolio from './components/Portfolio'
import Gallery   from './components/Gallery'
import Contact   from './components/Contact'
import Footer    from './components/Footer'

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Portfolio />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
