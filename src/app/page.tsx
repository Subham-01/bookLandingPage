import Image from 'next/image'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Author from './Author'
import ContactUs from './ContactUs'
import Review from './Review'
import Footer from './Footer'

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Author />
      <ContactUs />
      <Review />
      <Footer />

    </>
  )
}
