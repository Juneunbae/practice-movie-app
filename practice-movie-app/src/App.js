import {useEffect, useState} from "react";

function App() {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    // async-await을 사용하기 위해 getMovies 함수 생성
    const getMovies = async () => {
        const json = await (
            await fetch("https://yts.lt/api/v2/list_movies.json?minimum_rating=8.8&&sort_by=year")
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    console.log(movies);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map(movie =>
                        <div key={movie.id}>
                            {/* eslint-disable-next-line jsx-a11y/alt-text */}
                            <img src={movie.medium_cover_image}/>
                            <h2>{movie.title}</h2>
                            <p>{movie.summary ? movie.summary : movie.slug}</p>
                            <ul>
                                {movie.genres.map(g => (
                                    <li key={g}>{g}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default App;