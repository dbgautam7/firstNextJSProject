import Link from 'next/link'
import styles from "../styles/home.module.css"

const Navbar = () => {
  return (
    <>
    <nav className={styles.navbar}>
          <ul>
            <li>
              <Link href='/home'><span>Home</span></Link>
            </li>
            <li>
              <Link href='/about'><span>About</span></Link>
            </li>
            <li>
              <Link href='/contact'><span>Contact</span></Link>
            </li>
            <li>
              <Link href='/blog'><span>Blog</span></Link>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Navbar