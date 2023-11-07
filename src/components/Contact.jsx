
import {useState, useRef} from 'react'
import {motion} from 'framer-motion'
import emailJs from '@emailjs/browser'
import {styles} from '../styles'
import {EarthCanvas} from './canvas'
import SectionWrapper from '../hoc/SectionWrapper'
import {slideIn} from '../utils/motion'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin, BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name:'',
    email:'',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm({...form, [name] : value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setLoading(false)
    setForm({
      name:'',
      email:'',
      message: ''
    })

    // emailJs.send('service_id', "template_id",{
    //   from_name: form.name,
    //   to_name: 'fay',
    //   from_email: form.email,
    //   to_email:'faytech01@gmail.com',
    //   message: form.message
    // },
    // 'public_key'
    // )
    // .then(() => {
    //   setLoading(false);
    //   alert('thank you for your message. i will get back to you as soon as possible')
    //   setForm({
    //     name:'',
    //     email:'',
    //     message: ''
    //   })
    // }), 
    // (error) => {
    //   setLoading(false)
    //   console.log(error) 
    //   alert("Message not sent. Please try again") 
    // }

  }


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <section id='contact'>
   

    <div className='container contact_container rounded-2xl '>
      <div className='contact_options'>

        <article className='contact_option bg-tertiary'>
          <h4>Email</h4>
          <MdOutlineEmail className='font-[30px]'/>
          <a href='mailto:igbokwefc1@gmail.com' >send a message</a>
        </article>

        <article className='contact_option bg-tertiary'>
          <BsWhatsapp/>
          <h4>Whatsapp</h4>
          <a href='https://wa.link/pjb3n4'>send a message</a>
        </article>

        <article className='contact_option bg-tertiary'>
          <BsLinkedin/>
          <h4>Linkedin</h4>
          <a href='https://www.linkedin.com/in/favour-igbokwe-54b90323b/'>check out my page</a>
        </article>


        {/* <form>
          <input type='text' name='name' placeholder='your name' required/>
          <input type='email' name='email' placeholder='your email'/>
          <textarea name='message' rows='7' placeholder='your message'></textarea>
          
          <button type='submit' >
            <a href='mailto:igbokwefc1@gmail.com' className='btn btn-primary'>send a message</a>
          </button>
        </form> */}
      </div>
    </div>
    </section>

        {/* <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type='text' name='name' value={form.name} 
            onChange={handleChange} placeholder="what's your name" 
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg
            outlined-none border-none font-medium'/>
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type='text' name='email' value={form.email} 
            onChange={handleChange} placeholder="what's your email" 
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg
            outlined-none border-none font-medium'/>
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea rows='7' name='message' value={form.message} 
            onChange={handleChange} placeholder="what's your message" 
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg
            outlined-none border-none font-medium'/>
          </label>

          <button type='submit' className='outline-none text-white shadow-md shadow-primary
          rounded-xl bg-tertiary py-3 px-8 w-fit tfont-bold'>
            {loading ? 'sending...' : 'send'}
          </button>
        </form> */}
      </motion.div>

      <motion.div 
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[50px]'>
          <EarthCanvas/>
        </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')












