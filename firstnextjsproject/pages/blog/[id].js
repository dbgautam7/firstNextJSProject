import Navbar from "@/components/navbar"
import { useRouter } from "next/router"
import styles from '@/styles/home.module.css'

export const getStaticPaths = async () => {
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json()
  const paths = data.products.map((item, id) => ({
    params: { id: item.id.toString() },
  }))
  return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  const data = await res.json()
  return { props: { data } }
}

const Id = ({ data }) => {
  console.log(data,"##")
  const {id, brand, category, description, discountPercentage, price, rating, stock, title}= data;
  return (
    <>
      <Navbar />
      <div key={id} className={styles.box}>
          <span>{title}</span>
          <span>{brand}</span>
          <span>{category}</span>
          <span>{description}</span>
          <span>{price}</span>
          <span>{discountPercentage}</span>
          <span>{rating}</span>
          <span>{stock}</span>
      </div>

    </>
  )
}

export default Id