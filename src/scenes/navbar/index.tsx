// import React from 'react'
import {useState} from 'react'
import Logo from '@/assets/Logo.png'
import Link from './Link'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'


type Props = {
    isTop:boolean,
    selectedPage:string,
    setSelectedPage:(value:string)=>void
}

const Navbar = ({isTop,selectedPage,setSelectedPage}: Props) => {
    const [isMenu,setIsMenu]=useState(false)
    const flexBetween='flex items-center justify-between'
    const isAboveMediumScreens=useMediaQuery("(min-width:1060px)");
    const navbarBackground=isTop?"":'bg-primary-100 drop-shadow'
  return (
    <nav>
        <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
             <div className={`${flexBetween} w-full gap-16`}>
                <img src={Logo} alt="logo" />
                {isAboveMediumScreens?<div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                    <Link page='Home' selectedPage={selectedPage} 
                    setSelectedPage={setSelectedPage}/>
                    <Link page='Benefits' selectedPage={selectedPage} 
                    setSelectedPage={setSelectedPage}/>
                    <Link page='Our Classes' selectedPage={selectedPage} 
                    setSelectedPage={setSelectedPage}/>
                    <Link page='Contact Us' selectedPage={selectedPage} 
                    setSelectedPage={setSelectedPage}/>
                </div>
                <div className={`${flexBetween} gap-8`}>
                    <div>Sign In</div>
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Become a member
                        </ActionButton>
                </div>
                </div>:(
                    <button className='rounded-full bg-secondary-500 p-2' onClick={()=>{
                        setIsMenu(!isMenu);
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

                    </button>
                )}
             </div>
        </div>
        </div>
        {
            !isAboveMediumScreens && isMenu && (
                <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
                    <div className='flex justify-end p-12'>
                        <button onClick={()=>setIsMenu(!isMenu)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-400">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
  </button>
                    </div>
                    <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
                    <Link page='Home' selectedPage={selectedPage} 
                    setSelectedPage={setSelectedPage}/>
                    <Link page='Benefits' selectedPage={selectedPage} 
                    setSelectedPage={setSelectedPage}/>
                    <Link page='Our Classes' selectedPage={selectedPage} 
                    setSelectedPage={setSelectedPage}/>
                    <Link page='Contact Us' selectedPage={selectedPage} 
                    setSelectedPage={setSelectedPage}/>
                </div> 
                </div>
            )
        }
    </nav>
  )
}

export default Navbar