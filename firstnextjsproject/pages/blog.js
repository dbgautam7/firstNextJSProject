import Navbar from '@/components/navbar'
import styles from '@/styles/home.module.css'
import Link from 'next/link'

export const getStaticProps=async()=> {
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json()
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

const Blog = ({data}) => {
  // console.log(data,"data")
  return (
    <div className={styles.blog}>
      <Navbar />
        <p>This is my Blog Page</p>
        <div>
        {data.products.slice(0,5).map((item,id)=>{
          return (
            <div key={id}>
              <ul>
              
                <li>
               <h3>{item.id}</h3>
               <Link href={`/blog/${item.id}`}>
            <h3>{item.title}</h3>
            </Link>
            </li>
           
            </ul>
            </div>
          )
        })}
        </div>
    </div>
  )
}

export default Blog