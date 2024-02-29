import { motion } from 'framer-motion'
import HText from '@/shared/HText'
import Benefit from './benefit'
import ActionButton from '@/shared/ActionButton'
import BenefitPageGraphic from '@/assets/BenefitsPageGraphic.png'
// import React from 'react'

type Props = {
    setSelectedPage:(value:string)=>void
}

type BenefitType={
    icon:JSX.Element,
    title:string,
    description:string
}

const benefits:Array<BenefitType>=[
    {
        icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
      </svg>,
      title:'State of Art Facilties',
      description:'Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.'
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
    </svg>
    ,
      title: "100's of Diverse Classes",
      description:
        "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
    ,
      title: "Expert and Pro Trainers",
      description:
        "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
]

const container={
    hidden:{},
    visible:{
        transition:{staggerChildren:2}
    }
}

const index = ({setSelectedPage}: Props) => {
  return (
    <section id='benefits' className='mx-auto min-h-full w-5/6 py-20'>
<motion.div onViewportEnter={()=>setSelectedPage('benefits')}>
<motion.div 
    initial='hidden'
    whileInView="visible"
    viewport={{once:true,amount:0.5}}
    transition={{duration:0.5}}
    variants={{
        hidden:{opacity:0,x:-50},
        visible:{opacity:1,x:0}
    }}
className='md:my-5 md:w-3/5'>
    <HText>MORE THAN JUST A GYM</HText>
    <p className='my-5 text-sm'>
    We provide world class fitness equipment, trainers and classes to
    get you to your ultimate fitness goals with ease. We provide true
    care into each and every member.  
    </p>
</motion.div>
<motion.div 
initial='hidden'
whileInView='visible'
viewport={{once:true,amount:0.5}}
variants={container}
className='md:flex items-center justify-betwee gap-8 mt-5'>
{benefits.map((benefit)=>(
    <Benefit key={benefit.title} 
    icon={benefit.icon}
    title={benefit.title}
    description={benefit.description}
    setSelectedPage={setSelectedPage}/>
))}
</motion.div>
<div className='mt-16 items-center justify-between gap-20 md:mt-28 md:flex'>
    <img src={BenefitPageGraphic} className='mx-auto' alt="" />
    <div>
        <div className='relative'>
            <div className='before:absolute before:-top-20 before:-left-20 beforez-[-1] before:content-abstractwaves'>
                <motion.div
                 initial='hidden'
                 whileInView="visible"
                 viewport={{once:true,amount:0.5}}
                 transition={{duration:0.5}}
                 variants={{
                     hidden:{opacity:0,x:-50},
                     visible:{opacity:1,x:0}
                 }}>
                    <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className='text-primary-500'>FIT</span>
                    </HText></motion.div>
            </div>
        </div>
        <motion.div
         initial='hidden'
         whileInView="visible"
         viewport={{once:true,amount:0.5}}
         transition={{delay:0.2,duration:0.5}}
         variants={{
             hidden:{opacity:0,x:50},
             visible:{opacity:1,x:0}
         }}>
            <p className='my-5'>Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.</p>
            <p className='mb-5'>
            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
            </p>
        </motion.div>
        <div className='relative mt-16 '> 
    <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles'>
        <ActionButton setSelectedPage={setSelectedPage}>
    Join Now
        </ActionButton>
    </div>
        </div>
    </div>
</div>
</motion.div>
    </section>
  )
}

export default index