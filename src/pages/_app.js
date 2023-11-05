import Navbar from '@/Components/Navbar'
import React from 'react'

const _app = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default _app