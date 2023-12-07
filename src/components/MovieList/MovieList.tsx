import { useState, useEffect } from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import MovieCard from '../MovieCard/MovieCard';
import { MovieType } from '../../types/moviesTypes';

import './MovieList.css';

interface MovieCardProps {
    title: string;
    fetchMovies: () => Promise<MovieType[]>;
}

const MovieList: React.FC<MovieCardProps> = ({ title, fetchMovies }) => {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [startIndex, setStartIndex] = useState(0);
    const cardsPerPage = 6;

    useEffect(() => {
        const fetchData = async () => {
            const fetchedMovies = await fetchMovies();
            setMovies(fetchedMovies);
        };

        fetchData();
    }, []);

    const goToPrevSlide = () => {
        const newStartIndex =
            (startIndex - cardsPerPage + movies.length) % movies.length;
        setStartIndex(newStartIndex);
    };

    const goToNextSlide = () => {
        const newStartIndex = (startIndex + cardsPerPage) % movies.length;
        setStartIndex(newStartIndex);
    };

    const visibleMovies = movies
        .concat(movies.slice(0, cardsPerPage))
        .slice(startIndex, startIndex + cardsPerPage);

    return (
        <section className="movie_container">
            <h2 className="section_title">{title}</h2>
            <div className="slider">
                <MdArrowBackIos
                    className="prev_arrow"
                    onClick={goToPrevSlide}
                />
                {visibleMovies.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
                <MdArrowForwardIos
                    className="next_arrow"
                    onClick={goToNextSlide}
                />
            </div>
        </section>
    );
};

export default MovieList;
