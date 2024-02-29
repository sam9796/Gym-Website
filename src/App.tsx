import Navbar from '@/scenes/navbar'
import Home from '@/scenes/home'
import { useState,useEffect } from 'react'
import Benefits from '@/scenes/benefits'
import OurClasses from '@/scenes/ourclasses'
import ContactUs from '@/scenes/contactus'
import Footer from '@/scenes/footer'

enum SelectedPage{
  Home='home',
  Benefits='benefits',
  OurClasses='ourclasses',
  ContactUs='contactus'
}

function App() {
  const [selectedPage,setSelectedPage]=useState<string>('home')
  const [isTop,setIsTop]=useState<boolean>(true);
  useEffect(()=>{
    const handleScroll=()=>{
    if(window.scrollY===0){
      setIsTop(true)
      setSelectedPage('home')
    }
    else {
      setIsTop(false)
    }}
    window.addEventListener('scroll',handleScroll)
    return ()=>window.removeEventListener('scroll',handleScroll)
  },[])
  return (
    <div className='app bg-gray-20'>
      <Navbar
      isTop={isTop}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  )
}

export default App
