import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from '../layouts';
import {
    ErrorPage,
    Home,
    Movie,
    movieLoader,
    Trailer,
    trailerLoader,
    Movies,
    TvSeries,
    Search,
} from '../pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
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
            },
            {
                path: '/series',
                element: <TvSeries />,
            },
            {
                path: '/search',
                element: <Search />,
            },
        ],
    },
]);

const App: FC = () => {
    return <RouterProvider router={router} />;
};

export default App;
