import React from "react";
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export const getStaticProps = async (ctx) => {

  // ctx will contain request parameters
  const { params } = ctx;

  // We will destructure id from the parameters
  const characterId = params.uid;

  // Fetching species data
  const res = await fetch(
    `https://www.swapi.tech/api/species/${characterId}`
  );
  const characterData = await res.json();

  // Sending data to the page via props
  return {
    props: {
      species: characterData.result,
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

const Species = ({ species }) => {
  return (
    <div className="bg-white dark:bg-slate-800">
      <main className={styles.main}>
        <h1 className="text-3xl font-bold dark:text-white">Species: {species.properties.classification}</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <ul className="flex flex-col space-y-4">
              <li className="dark:text-white">Designation : {species.properties.designation}</li>
              <li className="dark:text-white">Average Height : {species.properties.average_height}</li>
              <li className="dark:text-white">Average Lifespan : {species.properties.average_lifespan}</li>
              <li className="dark:text-white">Hair Colors : {species.properties.hair_colors}</li>
              <li className="dark:text-white">Skin Colors : {species.properties.skin_colors}</li>
              <li className="dark:text-white">Eye Colors : {species.properties.eye_colors}</li>
              <li className="dark:text-white">Language : {species.properties.language}</li>
            </ul>
          </div>
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
          Back to People
        </a>
      </footer>
    </div>
  );
};

export default Species;