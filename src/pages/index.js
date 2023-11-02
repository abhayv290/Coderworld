import Head from 'next/head'
import Image from 'next/image'
// import script from 'next/script'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'



export default function Home() {

  return (
    <>
      <Head>
        <title>CoderWorld: Blogging the Code Revolution"</title>
        <meta name="description" content="Join the code revolution at CoderWorld, where our blog is your window into the coding universe. Stay informed, inspired, and connected with our community of bloggers and developers. Explore, learn, and blog your way to coding greatness" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <ul className={`${styles.mainnav} d-flex justify-content-between `} >
          <Link href={'/Home'}>
            <li>Home</li>
          </Link >
          <Link href={'/About'}>
            <li>About</li>
          </Link>
          <Link href={'/Contact'}>
            <li>Contact</li>
          </Link>
          <Link href={'/Blog'}>
            <li>Blogs</li>
          </Link>
        </ul>
      </nav >



      <main className={`${styles.main}`}>
        <div className='container'>
          <h1 className='text-center fw-bold'>CoderWorld</h1>
          <p className='text-center fs-2 '>Blogging the Code Revolution</p>
        </div>







        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>

              Docs <span>-&gt;</span>
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
