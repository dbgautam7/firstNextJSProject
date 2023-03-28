import React from 'react'
import styles from '@/styles/About.module.css'
import Navbar from '@/components/navbar'

const About = () => {
  return (
    <div className={styles.about}>
      <Navbar />
        <h1>Welcome to About Page</h1>
    </div>
  )
}

export default About