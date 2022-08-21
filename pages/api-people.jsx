import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {

  // Fetching data from jsonplaceholder.
  const res = await fetch(
    'https://www.swapi.tech/api/people/');
  let allPeople = await res.json();


  // Sending fetched data to the page component via props.
  return {
    props: {
      allPeople: allPeople.results.map((person) => person.name)
    }
  }
}

const People = ({ allPeople }) => {
  return (
    <div className="bg-white dark:bg-slate-800">
      <main className={styles.main}>
        <h1 className="text-3xl font-bold dark:text-white">All People</h1>
        <div className={styles.grid}>
          <ul>
            {allPeople.map((person, uid) => (
              <li className="dark:text-white hover:bg-sky-700" key={uid}><Link href='/character/[uid]' as={`/character/${uid + 1}`} passHref><a>{person}</a></Link></li>))
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
          href="/api-films"
          rel="noopener noreferrer"
        >
          Films
        </a>
      </footer>
    </div>
  )
}

export default People