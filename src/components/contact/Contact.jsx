

import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
    <h5>Get in touch</h5>
    <h2>Contact me</h2>

    <div className='container contact_container'>
      <div className='contact_options'>

        <article className='contact_option'>
          <MdOutlineEmail/>
          <h4>Email</h4>
          <a href='mailto:igbokwefc1@gmail.com' >send a message</a>
        </article>

        <article className='contact_option'>
          <BsWhatsapp/>
          <h4>Whatsapp</h4>
          <a href='https://api.whatsapp.com/send?phone=+2347082471978'>send a message</a>
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
  )
}

export default Contact
