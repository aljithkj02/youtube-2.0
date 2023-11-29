import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { closeToggleMenu } from "../redux/appSlice";
import { Video } from "../components/Video";
import { convertViewCount } from "../utils";
import { RecommendedVideo } from "../components/RecommendedVideo";

const VideoContainer = () => {
    const [params] = useSearchParams();
    const { state: videoInfo } = useLocation();
    const videoId = params.get('v');
    const dispatch = useDispatch();
    const popularVideos = useSelector(store => store.app.popularVideos); 

    useEffect(() => {
        dispatch(closeToggleMenu());
    })

    const { snippet, statistics } = videoInfo;

    const { title } = snippet;
    const { viewCount } = statistics;
    
    return ( 
        <div className="grid grid-cols-[2.5fr_1fr] gap-6 cursor-pointer">
            <div>
                <Video videoId={videoId} />
                <div className="mt-4">
                    <h1 className="font-semibold text-lg">{ title }</h1>
                    <p className="font-semibold text-gray-800">{ convertViewCount(viewCount) }</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                {
                    popularVideos && popularVideos.map((item) => {
                        return item.id !== videoId ? <RecommendedVideo key={item.id} {...item} /> : null
                    })
                }
            </div>
        </div>
    );
};

export default VideoContainer;
