import React from 'react'
import './Header.scss'
import Lottie from 'react-lottie'

import animation1 from '../../assets/animation1.json'
import { AppWrap } from '../../wrapper'
import { motion } from 'framer-motion'
import { images } from '../../constants'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

function Header() {

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animation1
  }

  return (
    <div className='app__header app__flex'>
      <div className='app__wrap-intro'>
        <div className='app__intro'>
          <div className='app__line-circle'>
            <div className='app__circle' />
            <div className='app__line' />
          </div>
        </div>
        <motion.div whileInView={{ x: [-100, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
          className='app__header-info'>
          <div>
            <h1 className='head-text' style={{textAlign:'start'}} >Hi, I'm <span>Aman</span></h1>
            <p className='p-text' style={{ color: '#2c2c2c', fontWeight: 'bold' }}>
            I develop fullstack web applications and design clean UI/UX
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        whileInView={{ opacity: [0, 1], scale: [0.5, 1] }}
        transition={{ duration: 0.5, deplayChildren: 0.5 }}
        className='app__header-img' >
        <Lottie options={animationOptions} className='animation' />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'>
        {[images.javascript, images.node, images.react].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt='circle' />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'Home')
