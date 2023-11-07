import {motion} from 'framer-motion'
import {styles} from '../styles'
import {BallCanvas, ComputersCanvas, EarthCanvas} from './canvas'
import {slideIn} from '../utils/motion'
import { useEffect, useState } from 'react'

// import SectionWrapper from '../hoc/SectionWrapper'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia( '(max-width: 600px )')

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])
  return (
    <section id='home' className='relative w-full h-screen mx-auto' >

      <div className={`${styles.padding} absolute insert-0 top-[80px]
      max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className='flex flex-col justify-center items-center mt-3'>
          <div className='flex flex-col justify-center items-center mt-3'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
            <div className='w-1 sm:h-80 h-60 violet-gradient mt-2'/>
          </div>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, i'm 
            <span className='text-[#915eff]'> Fay</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:hidden block'/>
            interfaces and web applications
          </p>
        </div>

      </div>

      {/* <ComputersCanvas/> */}
      {/* <EarthCanvas/> */}
      {/* <BallCanvas/> */}

      <motion.div 
        variants={slideIn('right', 'tween', 0.2, 1)}
        className=' xl:flex-1 xl:h-auto md:h-[550px] h-[650px]' >
          
          <EarthCanvas isMobile={isMobile}/>
        </motion.div>

      <div className='absolute xs:bottom-10 bottom-[5rem] w-full 
      flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px]  border-secondary border-2 
          rounded-3xl flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration:1.5,
                repeat:Infinity,
                repeatType:'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

      
    </section>
  )
}

export default Hero
// export default SectionWrapper(Hero, 'about')
