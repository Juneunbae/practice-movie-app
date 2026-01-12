import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImage, title, year, summary, slug, genres}) {
    return (
        <div className={styles.movie}>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={coverImage} alt={title} className={styles.movie__img}/>
            <h2 className={styles.movie__title}>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <h3 className={styles.movie__year}>{year}</h3>
            <p>{summary ? (summary.length > 235 ? `${summary.slice(0, 235)}...` : summary) : slug}</p>
            <ul className={styles.movie__genres}>
                {genres.map(g => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    slug: PropTypes.string,
    genres: PropTypes.arrayOf(String).isRequired
}

export default Movie;