import PropTypes from "prop-types";

function Movie({coverImage, title, summary, slug, genres}) {
    return (
        <div>
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={coverImage} alt={title}/>
            <h2>{title}</h2>
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
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    slug: PropTypes.string,
    genres: PropTypes.arrayOf(String).isRequired
}

export default Movie;