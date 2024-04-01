import Link from "next/link";
import Movie from "../../../components/movie";
import styles from "../../../styles/movies.module.css";
import { API_URL } from "../../constans";

export const metadata = {
    title: "Movie",
};

// React와 달리 component 밖에서 fetch를 사용하여 서버에서 데이터를 가져온다
async function getMovies() {
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

// await을 사용하기 위해 부모에 async가 있어야한다
export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                />
            ))}
        </div>
    );
}
