import CTA from "@/components/CTA/CTA"
import Contact from "@/components/Contact/Contact"
import Footer from "@/components/Footer.tsx/Footer"
import Process from "@/components/Process/Process"
import Testimonials from "@/components/Testimonials/Testimonials"


const page = () => {
  return (
    <>
    <Process/>
    <Testimonials/>
    <CTA/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default page   