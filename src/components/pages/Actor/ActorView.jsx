import React from 'react';
import { NavLink } from 'react-router-dom';
import whiteImage from '../Movies/img/whiteBlock.jpg';
import styles from './Actor.module.css';

import Header from '../../Header/HeaderContainer/HeaderContainer';

const ActorView = ({ actor }) => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        {actor && (
          <div className={styles.container}>
            <div className={styles.actor__topInfo}>
              <h1 className={styles.actor__name}>{actor.name}</h1>
              <img
                className={styles.actor__img}
                src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                alt=""
              />
            </div>
            <section className={styles.moives__section}>
              <h2 className={styles.moives__section__title}>Known For</h2>
              <ul className={styles.list}>
                {actor.known_for.map(el => (
                  <li className={styles.item} key={el.id}>
                    <NavLink
                      className={styles.item__navlink}
                      to={`/movieId/${el.id}`}
                    >
                      <div className={styles.topInfo}>
                        <div className={styles.titleContainer}>
                          <h2 className={styles.title}> {el.title}</h2>
                          <p>{el.release_date}</p>
                        </div>
                      </div>
                      {el.poster_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w200${
                            el.poster_path
                          }`}
                          alt=""
                        />
                      ) : (
                        <img src={whiteImage} alt="" />
                      )}

                      <p className={styles.overview}>
                        {el.overview.slice(0, 150)}
                      </p>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}
      </div>
    </>
  );
};
export default ActorView;
