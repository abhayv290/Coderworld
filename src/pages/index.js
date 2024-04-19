import Head from 'next/head'
import Image from 'next/image'
// import { useEffect } from 'react'
// import script from 'next/script'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Link from 'next/link'
// import { usePathname } from "next/navigation"


export default function Home() {



  return (
    <>

      <Head>
        <title>CoderWorld: Blogging the Code Revolution"</title>
        <meta name="description" content="Join the code revolution at CoderWorld, where our blog is your window into the coding universe. Stay informed, inspired, and connected with our community of bloggers and developers. Explore, learn, and blog your way to coding greatness" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>



      <main className={ `${styles.main}` }>
        <div className='container'>
          <h1 className='text-center fw-bold'>CoderWorld <span><img src="public\favicon-16x16.png" alt="" /></span></h1>
          <p className='text-center fs-2 '>Blogging the Code Revolution</p>
        </div>














      </main>

    </>
  )
}
