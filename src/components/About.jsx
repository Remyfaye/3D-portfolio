import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import SectionWrapper from '../hoc/SectionWrapper'

const ServiceCard = ({index, title, icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      
      <motion.div
        variants ={ fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className=' w-full green-pink-gradient  p-[1px] rounded-[20px] shadow-card'
      >
        <div 
        options={{max:45, scale:1, speed:450}}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
        flex justify-evenly items-center flex-col'
         >
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain'/>
          <h2 className='text-[20px] font-bold text-center'>{title}</h2>

        </div>
      </motion.div>
    </Tilt >
  )
}

const About = () => {
  return (
    <section >
       
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p 
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      variants={fadeIn('', '', 0.1, 1)}>
        I am a skilled software developer with experience in Javascript, 
        wordpress, and 
        expertise in frameworks like React, Node.js ,Next.js and three.js. 
        I collaborate
        quickly and closely with clients to create efficient, scalable and user-friendly
        solutions and bring their ideas to life.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10  '>
        {services.map ((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </section>
  )
}

export default SectionWrapper(About, 'about')