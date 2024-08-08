import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Contact from './components/Contact'
import BgGradient from "./assets/gradient-blue-pink-sky.jpg"


const App = () => {
  return (
    <div className='bg-background'>
      <div style={{
        backgroundImage: `url(${BgGradient})`,
        backgroundPosition: `50% 50%`
      }}>
      <Navbar/>
      <Hero/>
      </div>
      <Skills/>
      <Experience/>
      {<AboutMe/>}
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App