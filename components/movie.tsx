"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../styles/movie.module.css";

interface IMovieProps {
    title: string;
    id: number;
    poster_path: string;
}

export default function Movie({ title, id, poster_path }: IMovieProps) {
    // useRouter()는 next/router가 아니라 next/navigation에서 import해야한다
    const router = useRouter();
    // onClick은 CSR에서 이뤄진다
    const onClick = () => {
        router.push(`/movies/${id}`);
    };
    return (
        <div className={styles.movie}>
            <img src={poster_path} alt={title} onClick={onClick} />
            {/* prefetch : 클릭하기 전에 미리 data를 백그라운드에서 fetch한다 */}
            <Link prefetch href={`/movies/${id}`}>
                {title}
            </Link>
        </div>
    );
}
