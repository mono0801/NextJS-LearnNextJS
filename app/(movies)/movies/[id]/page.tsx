import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

/* async function getMovie(id: string) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

async function getVideo(id: string) {
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
} */

export default async function MoviePage({
    params: { id },
}: {
    params: { id: string };
}) {
    /* // 아래처럼 2개로 나눠서 fetch를 할 경우
    // getMovie()가 fetch 완료되기 전까진 getVideo() 실행이 안된다
    const movie = await getMovie(id);
    const videos = await getVideo(id); 
    return <h1>{movie.title}</h1>; */
    // =====================================================================//
    /* // Promise.all을 사용하여 동시에 병렬 fetching을 할 수 있다
    // 단, getMovie()와 getVideo()의 fetch가 둘 다 끝나야 출력이 가능하다
    const [movie, video] = await Promise.all([getMovie(id), getVideo(id)]);
    return <h1>{movie.title}</h1>; */

    return (
        <div>
            {/* <Suspense>를 사용할 경우 각각 fetch이 끝나면 개별적으로 출력이 된다 */}
            {/* fallback fetching 중에 표시 */}
            <Suspense fallback={<h1>Loading movie info</h1>}>
                {/* @ts-expect-error Async Server Component */}
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie video</h1>}>
                {/* @ts-expect-error Async Server Component */}
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}
