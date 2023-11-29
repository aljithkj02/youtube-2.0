import { YOUTUBE_API_URL, YOUTUBE_SEARCH_API } from "../utils/constants";


export const getVideos = async () => {
    try {
        const response = await fetch(YOUTUBE_API_URL);
        const json = await response.json();
        return json?.items;
    } catch (error) {
        console.log(error.message);
    }
}

export const getQuerySuggestions = async (query) => {
    try {
        const response = await fetch(YOUTUBE_SEARCH_API + query);
        const json = await response.json();
        return json[1];
    } catch (error) {
        console.log(error.message);
    }
}