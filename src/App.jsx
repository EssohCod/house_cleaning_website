// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
