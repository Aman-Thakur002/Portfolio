import React from 'react'

import { BsWhatsapp, BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs'

function SocialMedia() {
  return (
    <div className='app__social'>
        
      <div>
        <a href="https://github.com/Aman-Thakur002" target='_blank'>
          <BsGithub/>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/aman-pratap-singh-927959246/" target='_blank'>
        <BsLinkedin/>
        </a>
      </div>
      <div>
        <a href="https://wa.me/9315589061" target='_blank'>
        <BsWhatsapp/>
        </a>
      </div>

    </div>
  )
}

export default SocialMedia