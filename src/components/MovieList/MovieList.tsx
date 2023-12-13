import { useState, useEffect, FC } from 'react';
import { MovieType } from '../../types';
import MovieCard from '../MovieCard';
import Slider from '../Slider';

import './MovieList.css';

interface MovieCardProps {
    title: string;
    fetchMovies: () => Promise<MovieType[]>;
}

const MovieList: FC<MovieCardProps> = ({ title, fetchMovies }) => {
    const [movies, setMovies] = useState<MovieType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedMovies = await fetchMovies();
                setMovies(fetchedMovies);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="movie_container">
            <h2 className="section_title">{title}</h2>
            <Slider>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </Slider>
        </section>
    );
};

export default MovieList;
