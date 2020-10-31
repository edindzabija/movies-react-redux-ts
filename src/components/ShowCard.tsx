import React from 'react'
import { Link } from 'react-router-dom'
import { Show } from '../actions/ShowActionTypes'
import styles from '../styles/card.module.css'

const ShowCard: React.FC<Show> = ({
  id,
  name,
  poster_path,
  first_air_date,
  overview,
  backdrop_path,
}) => {
  return (
    <li>
      <Link to={`/show/${id}`}>
        <div className={styles.card} id={id?.toString()}>
          <div className={styles.cardInfo}>
            <div className={styles.cardHeader}>
              {poster_path !== null ? (
                <img
                  className={styles.smallPoster}
                  src={`http://image.tmdb.org/t/p/w300/${poster_path}`}
                  alt={name}
                />
              ) : (
                <img
                  className={styles.smallPoster}
                  src={`https://via.placeholder.com/300x450?text=Missing`}
                  alt={name}
                />
              )}
              <h2 className={styles.cardTitle}>{name}</h2>
              <h4>{first_air_date.slice(0, 4)}</h4>
            </div>
            <div className={styles.descriptionContainer}>
              <p className={styles.description}>{overview.slice(0, 130)}...</p>
            </div>
          </div>
          {backdrop_path?.length > 0 ? (
            <div
              style={{
                backgroundImage: `url(http://image.tmdb.org/t/p/w500${backdrop_path})`,
              }}
              className={styles.backgroundImage}
            ></div>
          ) : poster_path !== null ? (
            <div
              style={{
                backgroundImage: `url(http://image.tmdb.org/t/p/w500${poster_path})`,
              }}
              className={styles.backgroundImage}
            ></div>
          ) : (
            <div
              style={{
                backgroundImage: `url(https://wallpapercave.com/wp/wp2494960.png)`,
              }}
              className={styles.backgroundImage}
            ></div>
          )}
        </div>
      </Link>
    </li>
  )
}

export default ShowCard
