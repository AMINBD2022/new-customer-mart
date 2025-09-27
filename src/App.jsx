import './App.css'
import Navbar from './components/Nav-bar/navber.jsx';
import HeroSection from "./components/hero/hero.jsx";
import Footer from './components/Footer_Area/Footer.jsx';
import { ToastContainer} from 'react-toastify';




function App() {
  return (
    <>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <Footer></Footer>
        <ToastContainer/>
        
    </>
  )
}

export default App
