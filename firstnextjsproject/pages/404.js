import Link from 'next/link'
import React from 'react'

const ErrorPage = () => {
  return (
    <div>
        <h1>404 Error</h1>
        <h3>Sorry! The page you are looking not found</h3>
        <Link href='/'>Back to Home Page</Link>
    </div>
  )
}

export default ErrorPage