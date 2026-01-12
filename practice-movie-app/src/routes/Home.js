import {useEffect, useState} from "react";
import Movie from "../component/Movie";
import styles from "./Home.module.css"

function Home() {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    // async-await을 사용하기 위해 getMovies 함수 생성
    const getMovies = async () => {
        const json = await (
            await fetch("https://yts.bz/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    console.log(movies);
    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>
            ) : (
                <div className={styles.movies}>
                    {movies.map(movie =>
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            coverImage={movie.medium_cover_image}
                            title={movie.title}
                            year={movie.year}
                            summary={movie.summary}
                            slug={movie.slug} genres={movie.genres}
                        />
                    )}
                </div>
            )}
        </div>
    )
}

export default Home;