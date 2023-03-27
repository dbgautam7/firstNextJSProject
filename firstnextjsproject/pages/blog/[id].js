import { useRouter } from "next/router"

const Id = () => {
const router=useRouter()
const {id}=router.query

  return (
    <>
 <h1>My Blog  {id} Content</h1>
    </>
  )
}

export default Id