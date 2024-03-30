import Link from "next/link";

export const metadata = {
    title: "Movie",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

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
        <div>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link key={movie.id} href={`/movies/${movie.id}`}>
                        {movie.title}
                    </Link>
                </li>
            ))}
        </div>
    );
}
