import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {

  // Fetching data from jsonplaceholder.
  const res = await fetch(
    'https://www.swapi.tech/api/films/');
  let allFilms = await res.json();


  // Sending fetched data to the page component via props.
  return {
    props: {
      allFilms: allFilms.result.map((film) => film)
    }
  }
}

const Films = ({ allFilms }) => {
  return (
    <div className="bg-white dark:bg-slate-800">
      <main className={styles.main}>
        <h1 className="text-3xl font-bold dark:text-white">All Films</h1>
        <div className={styles.grid}>
          <ul>
            {allFilms.map((film, uid) => (
              <li className="dark:text-white" key={uid}><Link href='/film/[uid]' as={`/film/${uid + 1}`} passHref><a>{film.properties.title}</a></Link></li>))
            }
          </ul>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          className="dark:text-white hover:bg-sky-700"
          href="/"
          rel="noopener noreferrer"
        >
          Home
        </a>
        |
        <a
          className="dark:text-white hover:bg-sky-700"
          href="/api-people"
          rel="noopener noreferrer"
        >
          People
        </a>
      </footer>
    </div>
  )
}

export default Films