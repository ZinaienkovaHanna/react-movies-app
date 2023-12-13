import { FC } from 'react';
import { Link } from 'react-router-dom';
import { mdiStar, mdiFilmstrip } from '@mdi/js';
import { MovieType } from '../../types/moviesTypes';
import Image from '../Image';
import Paragraph from '../Paragraph';
import IconDot from '../IconDot';
import Label from '../Label';
import { getYearFromDate } from '../../utils/getYearFromDate';

import './MovieCard.css';

interface MovieCardProps {
    movie: MovieType;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
    return (
        <Link to={`/${movie.id}`} className="movie_card">
            <Image
                image={movie.backdropPath}
                alt={movie.title}
                className={'movie_card_img'}
            />
            <div className="movie_card_info_container">
                <Paragraph
                    text={getYearFromDate(movie.releaseDate)}
                    className={'text_small'}
                />
                <IconDot />
                <Label
                    path={mdiStar}
                    size={0.5}
                    text={movie.voteAverage.toFixed(1)}
                    className={'text_small'}
                />
                <IconDot />
                <Label
                    path={mdiFilmstrip}
                    size={0.5}
                    text={'movie'}
                    className={'text_small'}
                />
            </div>
            <h4 className="movie_card_title">{movie.title}</h4>
        </Link>
    );
};

export default MovieCard;
