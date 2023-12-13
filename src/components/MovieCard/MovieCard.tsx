import { FC } from 'react';
import { Link } from 'react-router-dom';

import { mdiStar, mdiFilmstrip, mdiCircleSmall } from '@mdi/js';
import { MovieType } from '../../types';
import Image from '../Image';
import Paragraph from '../Paragraph';
import IconDot from '../IconDot';
import { getYearFromDate } from '../../utils/getYearFromDate';

import './MovieCard.css';
import Label from '../Label';

interface MovieCardProps {
    movie: MovieType;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
    return (
        <Link to={`/${movie.id}`} className="movie_card">
            <Image image={movie.backdropPath} title={movie.title} />
            <div className="movie_card_info_container">
                <Paragraph text={getYearFromDate(movie.releaseDate)} />
                <IconDot path={mdiCircleSmall} size={0.75} />
                <Label
                    path={mdiStar}
                    size={0.5}
                    text={movie.voteAverage.toFixed(1)}
                />
                <IconDot path={mdiCircleSmall} size={0.75} />
                <Label path={mdiFilmstrip} size={0.5} text={'movie'} />
            </div>
            <h4 className="movie_card_title">{movie.title}</h4>
        </Link>
    );
};

export default MovieCard;
