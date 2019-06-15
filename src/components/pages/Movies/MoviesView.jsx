import React from 'react';
import { NavLink } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import styles from './Movies.module.css';
import whiteImage from './img/whiteBlock.jpg';

const MoviesView = ({ movies }) => {
  return (
    <ul className={styles.list}>
      {movies &&
        movies.map(el => (
          <li className={styles.item} key={el.id}>
            <NavLink className={styles.moreInfo} to={`/movieId/${el.id}`}>
              {el.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${el.poster_path}`}
                  alt=""
                />
              ) : (
                <img className={styles.myPhoto} src={whiteImage} alt="" />
              )}
              <div className={styles.topInfo}>
                <div className={styles.titleContainer}>
                  <h2 className={styles.title}> {el.title}</h2>
                  <p>{el.release_date}</p>
                </div>
              </div>

              <p className={styles.overview}>{el.overview.slice(0, 150)}</p>
            </NavLink>
          </li>
        ))}
      {movies && movies.length ? null : (
        <div className={styles.notFounded__container}>
          <Loader type="Oval" color="#ff4400" height="150" width="150" />
        </div>
      )}
    </ul>
  );
};

export default MoviesView;
