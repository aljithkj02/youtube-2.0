import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import VideoContainer from "../pages/VideoContainer";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/watch',
                element: <VideoContainer />
            }
        ]
    }
])