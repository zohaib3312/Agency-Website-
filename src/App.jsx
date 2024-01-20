
import Header from './Section/Header';
import Footer from './Section/Footer';
import { Outlet } from 'react-router-dom';
import About from './Section/About';
import Contact from './Section/Contact';
import Hero from './Section/Hero';
import Pricing  from './Section/Pricing';
import Testimonial from './Section/Testimonial';


const App = () => {
  return (
     <>
      <Header />
      
     <Outlet />
    
     <Footer />
     
     {/* <Hero />
     <About />
     <Pricing />
     <Testimonial />
     <Contact /> */}
     
     </>
  )
}

export default App
