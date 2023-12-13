import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MovieType } from '../../types';
import Image from '../Image';
import Paragraph from './Paragraph';

import './MovieCard.css';

interface MovieCardProps {
    movie: MovieType;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
    return (
        <Link to={`/${movie.id}`} className="movie_card">
            <Image image={movie.backdropPath} title={movie.title} />
            <Paragraph movie={movie} />
            <h4 className="movie_card_title">{movie.title}</h4>
        </Link>
    );
};

export default MovieCard;
