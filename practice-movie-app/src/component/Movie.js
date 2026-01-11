import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, coverImage, title, summary, slug, genres}) {
    return (
        <div>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={coverImage} alt={title}/>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary ? summary : slug}</p>
            <ul>
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