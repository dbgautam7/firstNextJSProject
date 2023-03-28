import Navbar from '@/components/navbar'
import styles from '@/styles/home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function() {
  return (
    <div className={styles.home}>
      <Navbar />
      <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
       width="400"
        height="400"
        alt="img" />
        <h1>Welcome to Home Page</h1>
        <Link href='/'><h3 style={{color:"black", textDecoration:"none"}}>Back to Root Page</h3></Link>
    </div>
  )
}
