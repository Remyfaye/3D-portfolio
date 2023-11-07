
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import SectionWrapper from '../hoc/SectionWrapper'
import {styles} from '../styles'
import {projects} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { github } from '../assets'

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return(
    <motion.div variants={fadeIn('up', 'spring', index*0.5, 0.75)} id='projects'>
      <Tilt options={{max:45, scale:1, speed:450}} 
      className='bg-tertiary p-5 rounded-2xl xl:w-[300px] sm:w-[360px] w-full'>

        <div className='relative w-full h-[230px]'>

          <img src={image} alt={name} 
          className='w-full h-[200px] object-cover rounded-2xl'/>

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div 
            onClick={() => window.open(source_code_link, '_blank')}
            className='black-gradient w-10 h-10 rounded-full flex justify-center
            items-center cursor-pointer'>
              <img src={github} alt={github} className='w-1/2 h-1/2 object-contain'/>

            </div>
          </div>

        </div>

        <div className='mt-5'>
            <h3 className='font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap  justify-between'>
          <div className='mt-4 flex flex-wrap gap-2 '>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
          </div>
         
          <div 
           onClick={() => window.open(source_code_link, '_blank')}
          className='p-4 bg-primary rounded-2xl cursor-pointer'>view</div>
        </div>

      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>
          My work
        </p>
        <h2 className={styles.heroHeadText}>
          Projects
        </h2>
      </motion.div>

      <div>
        <motion.p variants={fadeIn('', '', 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          The following projects showcase my skills and experience through real-world 
          examples of my work. Each project is briefly described with links to code 
          repositories and life demos in it. it reflects my ability to solve complex 
          problems, work with different technologies, and manage projects effectively
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-4 justify-center'>
        {projects.map((project, index) =>(
          <ProjectCard key={`${project.index}`} index={index} {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')





