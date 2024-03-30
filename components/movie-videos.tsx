import { API_URL } from "../app/(movies)/movies/page";

async function getVideo(id: string) {
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    // throw new Error("something broke....");
}

export default async function MovieVideos({ id }: { id: string }) {
    const videos = await getVideo(id);

    return <h6>{JSON.stringify(videos)}</h6>;
}
