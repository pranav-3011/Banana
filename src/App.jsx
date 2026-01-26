import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import OurCompany from './pages/OurCompany'
import WhoAreWe from './pages/WhoAreWe'
import OurTeam from './pages/OurTeam'
import OurJourney from './pages/OurJourney'
import CSR from './pages/CSR'
import ShippingPartnership from './pages/ShippingPartnership'
import CavendishG9 from './pages/CavendishG9'
import OurNetwork from './pages/OurNetwork'
import OurSuppliers from './pages/OurSuppliers'
import WhyChooseUs from './pages/WhyChooseUs'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import './App.css'

function App() {
  useEffect(() => {
    // Reveal animations on scroll
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal')
      reveals.forEach(element => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/our-company" element={<OurCompany />} />
          <Route path="/about/who-are-we" element={<WhoAreWe />} />
          <Route path="/about/our-team" element={<OurTeam />} />
          <Route path="/about/our-journey" element={<OurJourney />} />
          <Route path="/about/csr" element={<CSR />} />
          <Route path="/about/shipping-partnership" element={<ShippingPartnership />} />
          <Route path="/banana/cavendish-g9" element={<CavendishG9 />} />
          <Route path="/banana/our-network" element={<OurNetwork />} />
          <Route path="/banana/our-suppliers" element={<OurSuppliers />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App


