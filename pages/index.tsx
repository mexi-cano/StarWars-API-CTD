import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="bg-white dark:bg-slate-800">
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className="text-3xl font-bold dark:text-white">
            Welcome to the Star Wars Universe!
          </h1>
          <div className={styles.grid}>
            <ul className={styles.card}>
              <li>
                <p className="dark:text-white hover:bg-sky-700"><Link href={'/api-people'}>Explore the People</Link></p>
              </li>
              <li>
                <p className="dark:text-white hover:bg-sky-700"><Link href={'/api-films'}>All Movies</Link></p>
              </li>
            </ul>
          </div>
        </main>
  
        <footer className={styles.footer}>
          <a 
            className="dark:text-white"
            href="https://codethedream.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Built for CTD
            <span className={styles.logo}>
              <Image src="/replit.svg" alt="Replit Logo" width={20} height={18} />
            </span>
          </a>
        </footer>
      </div>
    </div>
  )
}

export default Home
