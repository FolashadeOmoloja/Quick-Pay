import AboutUs from "@/components/About-us/AboutUs"
import CTA from "@/components/CTA/CTA"
import Contact from "@/components/Contact/Contact"
import Footer from "@/components/Footer.tsx/Footer"
import MobileNav from "@/components/Navbar/MobileNav"
import Navbar from "@/components/Navbar/Navbar"
import Offer from "@/components/Offer/Offer"
import Process from "@/components/Process/Process"
import Testimonials from "@/components/Testimonials/Testimonials"


const page = () => {
  return (
    <>
    <Navbar/> 
    <MobileNav/>
    <Offer/>
    <AboutUs/>
    <Process/>
    <Testimonials/>
    <CTA/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default page   
