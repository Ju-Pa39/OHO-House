import { Navbar } from "./assets/Navbar";
import About from "./components/About"
import Contact from "./components/Contact";
import { Footer } from "./components/footer";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Services from "./components/services";


export default function App() {
  return (
   <>
   <Navbar />
   <Home />
   <Services />
   <Portfolio />
   <About />  
   <Contact />
   <Footer />
   </>
  )
}