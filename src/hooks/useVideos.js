import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getVideos } from "../apis/videos";
import { addPopularVideos } from "../redux/appSlice";

export const useVideos = () => {
    const dispatch = useDispatch();
    const popularVideos = useSelector(store => store.app.popularVideos);

    useEffect(() => {
        !popularVideos && fetchVideos();
    }, [])

    const fetchVideos = async () => {
        const videosData = await getVideos();
        if(videosData) {
            dispatch(addPopularVideos(videosData));
        }
    }
}