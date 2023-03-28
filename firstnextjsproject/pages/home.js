import styles from '@/styles/home.module.css'
import Link from 'next/link'

export default function() {
  return (
    <div className={styles.home}>
        <h1>Welcome to Home Page</h1>
        <Link href='/'><h3 style={{color:"black", textDecoration:"none"}}>Back to Root Page</h3></Link>
    </div>
  )
}
