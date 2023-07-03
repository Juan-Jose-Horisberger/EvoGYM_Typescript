import { useEffect, useState } from "react"
import { type SelectedPage } from "@/types"
import { SELECTED_PAGE } from './consts'
import NavBar from "@/components/navbar/Navbar"
import Home from "@/components/Home"
import Benefits from "@/components/Benefits"
import OurClasses from "@/components/OurClasses"
import ContactUs from "@/components/ContactUs"
import Footer from "@/components/Footer"


function App() {
   const [selectedPage, setSelectedPage] = useState<SelectedPage>(SELECTED_PAGE.HOME)
   const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

   useEffect(() => {
      const handleScroll = (): void => {
         if (window.scrollY === 0) {
            setIsTopOfPage(true)
            setSelectedPage(SELECTED_PAGE.HOME)
         }
         if (window.scrollY !== 0) setIsTopOfPage(false)
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
   }, [])


   return (
      <div className="app bg-gray-20">
         <NavBar
            isTopOfPage={isTopOfPage}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
         />
         <Home setSelectedPage={setSelectedPage} />
         <Benefits setSelectedPage={setSelectedPage} />
         <OurClasses setSelectedPage={setSelectedPage} />
         <ContactUs setSelectedPage={setSelectedPage} />
         <Footer />
      </div>
   )
}

export default App
