import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../layouts';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import TvSerieses from '../pages/TvSerieses';
import MyList from '../pages/MyList/MyList';
import Movie from '../pages/Movie';
import TvSeries from '../pages/TvSeries/TvSeries';
import Trailer from '../pages/Trailer';
import { loader as homeLoader } from '../pages/Home/loader';
import { loader as moviesLoader } from '../pages/Movies/loader';
import { loader as tvSeriesesLoader } from '../pages/TvSerieses/loader';
import { loader as movieLoader } from '../pages/Movie/loader';
import { loader as tvSeriesLoader } from '../pages/TvSeries/loader';
import { loader as trailerLoader } from '../pages/Trailer/loader';

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
                path: '/:movieId',
                element: <Movie />,
                loader: movieLoader,
            },
            {
                path: '/:movieId/trailer',
                element: <Trailer />,
                loader: trailerLoader,
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
                path: '/list',
                element: <MyList />,
            },
        ],
    },
]);

const App: FC = () => {
    return <RouterProvider router={router} />;
};

export default App;
