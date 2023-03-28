import Navbar from '@/components/navbar'
import styles from '@/styles/Contact.module.css'
import Image from 'next/image'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Navbar />
        <h2>Welcome to Contact Page</h2>
        <Image src='/db7.jpg' alt='img' width="500" height="600" />
        <p className='connect'>You can connect with me via Whatsapp</p>
        <style jsx>{
          `
          h2{
            color:green;
          }
          .connect{
          color:blue;
          }

          `
        }</style>
    </div>
  )
}

export default Contact