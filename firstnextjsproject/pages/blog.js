import Navbar from '@/components/navbar'
import styles from '@/styles/home.module.css'

const Blog = () => {
  return (
    <div className={styles.blog}>
      <Navbar />
        <p>This is my Blog Page</p>
    </div>
  )
}

export default Blog