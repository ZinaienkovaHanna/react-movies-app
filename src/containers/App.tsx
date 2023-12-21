import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../layouts';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Serieses from '../pages/Serieses';
import MyList from '../pages/MyList';
import Movie from '../pages/Movie';
import Series from '../pages/Series';
import TrailerMovie from '../pages/TrailerMovie';
import TrailerTv from '../pages/TrailerTv';
import {
    homeLoader,
    moviesLoader,
    movieLoader,
    trailerMovieLoader,
    seriesesLoader,
    seriesLoader,
    trailerSeriesLoader,
    movieBookmakedLoader,
} from '../pages/loader';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: homeLoader,
            },
            {
                path: '/movies',
                element: <Movies />,
                loader: moviesLoader,
            },
            {
                path: '/movies/:movieId',
                element: <Movie />,
                loader: movieLoader,
            },
            {
                path: '/movies/:movieId/trailer',
                element: <TrailerMovie />,
                loader: trailerMovieLoader,
            },
            {
                path: '/tv',
                element: <Serieses />,
                loader: seriesesLoader,
            },
            {
                path: '/tv/:tvId',
                element: <Series />,
                loader: seriesLoader,
            },
            {
                path: '/tv/:tvId/trailer',
                element: <TrailerTv />,
                loader: trailerSeriesLoader,
            },
            {
                path: '/list',
                element: <MyList />,
                loader: movieBookmakedLoader,
            },
        ],
    },
]);

const App: FC = () => {
    return <RouterProvider router={router} />;
};

export default App;
