import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Movies, TvSeries, Search, Movie, NotFound } from '../pages';
import { MainLayout } from '../layouts';

const App: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="movies" element={<Movies />} />
                    <Route path="tvseries" element={<TvSeries />} />
                    <Route path="search" element={<Search />} />
                    <Route path="/:id" element={<Movie />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
