import React, {useState} from 'react'
import {images} from '../../constants'
import { AppWrap, MotionWrap} from '../../wrapper'
import {client} from '../../client'
import './Footer.scss'

function Footer() {

  const [formData, setFormData] = useState({name : '' , email: '', message: ''})

   const [isFormSubmitted, setIsFormSubmitted] = useState(false)
   const [loading, setLoading] = useState(false)

   const {name, email, message} = formData
   const handleChange = (e) =>{
    const {name, value} = e.target;

    setFormData({...formData, [name]: value});

   }
   
   const handleSubmit =  () => {
    setLoading(true);

    const contact = {
      _type : 'contact',
      name : name,
      email : email,
      message : message
    }

      client.create(contact)
      .then(() => {
        setLoading(false)
        setIsFormSubmitted(true);
      })

   }
   



  return (
    <>
    <h2 className='head-text'>Contact Me</h2>
    <div className='app__footer-cards'>
      <div className='app__footer-card'>
        <img src={images.email} alt="email" />
        <a href ="mailto: amandhakare337@gmail.com" className='p-text'>amandhakare33@gmail.com</a>
        </div>
      <div className='app__footer-card'>
      <img src={images.mobile} alt="mobile" />
      <a href ="https://wa.me/9315589061" className='p-text'>9315589061</a>
      </div>
    </div>


     
     {!isFormSubmitted ? 
    <div className='app__footer-form app__flex'>
      <div className=' app__footer-input '>
        <input className='p-text' name='name' value={name} type="text" placeholder='Your Name' onChange={handleChange} />
       
      </div>
      <div className=' app__footer-input '>
      <input className='p-text' name='email' value= {email} type="email" placeholder='Email Name' onChange={handleChange} />
      </div>
      <div>
        <textarea name="message" value={message} className='p-text' placeholder='Your Message' onChange={handleChange} />
      </div>
     <div className='buttons'>
     <button type='buttom' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
      <a href={process.env.PUBLIC_URL + '/Resume.pdf'} download="Aman-Pratap-Singh_Resume.pdf">
        <button>Download Resume</button>
      </a>
     </div>
    </div> 
    :
    <div><h3 className='head-text'>Thank you for getting in touch</h3></div>
     }


    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'Contact',
  'app__primarybg'
)