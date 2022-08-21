import React from "react";
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export const getStaticProps = async (ctx) => {

  // ctx will contain request parameters
  const { params } = ctx;

  // We will destructure id from the parameters
  const personId = params.uid;

  // Fetching character data
  const res = await fetch(
    `https://www.swapi.tech/api/people/${personId}`
  );
  const personData = await res.json();

  // Sending data to the page via props
  return {
    props: {
      person: personData.result,
    },
  };
};

export const getStaticPaths = () => {

  // Specifying all the routes to be
  // pre-rendered by next js
  return {
    paths: [
      { params: { uid: "1" } },
      { params: { uid: "2" } },
      { params: { uid: "3" } },
      { params: { uid: "4" } },
      { params: { uid: "5" } },
      { params: { uid: "6" } },
      { params: { uid: "7" } },
      { params: { uid: "8" } },
      { params: { uid: "9" } },
      { params: { uid: "10" } },
    ],
    fallback: false,
  };
};

const Person = ({ person }) => {
  return (
    <div className="bg-white dark:bg-slate-800">
      <main className={styles.main}>
        <h1 className="text-3xl font-bold dark:text-white">{person.properties.name}</h1>
        <div className={styles.grid}>
          <ul className={styles.card}>
            <li className="dark:text-white">Gender : {person.properties.gender}</li>
            <li className="dark:text-white">Birth Year : {person.properties.birth_year}</li>
            <li className="dark:text-white">Eye Color : {person.properties.eye_color}</li>
            <li className="dark:text-white">Skin Color : {person.properties.skin_color}</li>
            <li className="dark:text-white">Hair Color : {person.properties.hair_color}</li>
            <li className="dark:text-white">Mass : {person.properties.mass}</li>
            <li className="dark:text-white hover:bg-sky-700"><Link href='/species/[person.uid]' as={`/species/${person.uid}`} passHref><a>Learn about species »</a></Link></li>
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
        </a> | 
        <a
          className="dark:text-white hover:bg-sky-700"
          href="/api-people"
          rel="noopener noreferrer"
        >
          Back
        </a>
      </footer>
    </div>
  );
};

export default Person;