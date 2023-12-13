import { useState, useEffect, FC } from 'react';
import { MovieType } from '../../types/moviesTypes';
import MovieCard from '../MovieCard';
import Slider from '../Slider';

import './MovieList.css';

interface MovieCardProps {
    title: string;
    fetchMovies: () => Promise<MovieType[]>;
}

const MovieList: FC<MovieCardProps> = ({ title, fetchMovies }) => {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [loader, setLoader] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedMovies = await fetchMovies();
                setMovies(fetchedMovies);
            } catch (error) {
                console.error('Error fetching movies:', error);
            } finally {
                setLoader(false);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="movie_container">
            <h2 className="section_title">{title}</h2>
            <Slider>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} loader={loader} />
                ))}
            </Slider>
        </section>
    );
};

export default MovieList;
