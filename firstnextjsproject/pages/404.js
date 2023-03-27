import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const ErrorPage = () => {

    const router=useRouter()
    const handleErrorPage=()=>{
        router.push('/')
    }

    useEffect(()=>{
        setTimeout(()=>{
            handleErrorPage()
        },3000)   
    },[])

  return (
    <div>
        <h1>404 Error</h1>
        <h3>Sorry! The page you are looking not found</h3>
        {/* <Link href='/'>Back to Home Page</Link> */} 
        {/* <button onClick={()=>handleErrorPage()}>Back to Home Page</button> */}
    </div>
  )
}

export default ErrorPage