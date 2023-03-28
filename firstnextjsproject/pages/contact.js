import styles from '@/styles/Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.contact}>
        <h2>Welcome to Contact Page</h2>
        <p className='connect'>You can connect with me via Whatsapp</p>
        <style jsx>{
          `
          h2{
            color:green;
          }
          .connect{
          color:yellow;
          }

          `
        }</style>
    </div>
  )
}

export default Contact