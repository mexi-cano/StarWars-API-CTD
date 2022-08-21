import React from "react";
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export const getStaticProps = async (ctx) => {

  // ctx will contain request parameters
  const { params } = ctx;

  // We will destructure id from the parameters
  const filmId = params.uid;

  // Fetching user data
  const res = await fetch(
    `https://www.swapi.tech/api/films/${filmId}`
  );
  const filmData = await res.json();

  // Sending data to the page via props
  return {
    props: {
      film: filmData.result,
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

const Film = ({ film }) => {
  return (
    <div className="bg-white dark:bg-slate-800">
      <main className={styles.main}>
        <h1 className="text-3xl font-bold dark:text-white">{film.properties.title}</h1>
        <div className={styles.grid}>
          <div className={styles.card}>
            <ul className="flex flex-col space-y-4">
              <li className="dark:text-white">Producer : {film.properties.producer}</li>
              <li className="dark:text-white">Title : {film.properties.title}</li>
              <li className="dark:text-white">Episode ID : {film.properties.episode_id}</li>
              <li className="dark:text-white">Director : {film.properties.director}</li>
              <li className="dark:text-white">Release Date : {film.properties.release_date}</li>
              <li className="dark:text-white">Opening Crawl : {film.properties.opening_crawl}</li>
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
          href="/api-films"
          rel="noopener noreferrer"
        >
          Back
        </a>
      </footer>
    </div>
  );
};

export default Film;