import { YOUTUBE_API_URL } from "../utils/constants";


export const getVideos = async () => {
    try {
        const response = await fetch(YOUTUBE_API_URL);
        const json = await response.json();
        return json?.items;
    } catch (error) {
        console.log(error.message);
    }
}