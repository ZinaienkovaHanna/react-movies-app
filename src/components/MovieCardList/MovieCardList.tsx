import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MovieCard from '../MovieCard/MovieCard';
import { MovieType, MovieCardListProps } from '../../types/moviesTypes';

import './MovieCardList.css';

const MovieCardList: React.FC<MovieCardListProps> = ({
    title,
    fetchMovies,
}) => {
    const [movies, setMovies] = useState<MovieType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedMovies = await fetchMovies();
            setMovies(fetchedMovies);
        };

        fetchData();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
    };

    return (
        <section className="movie_container">
            <h2 className="movie_title">{title}</h2>
            <Slider {...settings}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </Slider>
        </section>
    );
};

export default MovieCardList;
