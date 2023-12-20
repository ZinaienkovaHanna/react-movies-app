import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../layouts';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import TvSerieses from '../pages/TvSerieses';
import MyList from '../pages/MyList';
import Movie from '../pages/Movie';
import TvSeries from '../pages/TvSeries';
import TrailerMovie from '../pages/TrailerMovie';
import TrailerTv from '../pages/TrailerTv';
import {
    homeLoader,
    moviesLoader,
    movieLoader,
    trailerMovieLoader,
    tvSeriesesLoader,
    tvSeriesLoader,
    trailerTvLoader,
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
                element: <TvSerieses />,
                loader: tvSeriesesLoader,
            },
            {
                path: '/tv/:tvId',
                element: <TvSeries />,
                loader: tvSeriesLoader,
            },
            {
                path: '/tv/:tvId/trailer',
                element: <TrailerTv />,
                loader: trailerTvLoader,
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
