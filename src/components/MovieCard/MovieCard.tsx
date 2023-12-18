import { FC } from 'react';
import { Link } from 'react-router-dom';
import { mdiStar, mdiFilmstrip } from '@mdi/js';
import { MovieType } from '../../types/moviesTypes';
import Image from '../Image';
import P from '../P';
import DotDivider from '../DotDivider';
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
                <P
                    children={getYearFromDate(movie.releaseDate)}
                    textClassName={'text_small'}
                />
                <DotDivider />
                <Label
                    iconPath={mdiStar}
                    iconSize={0.5}
                    children={movie.voteAverage.toFixed(1)}
                    textClassName={'text_small'}
                />
                <DotDivider />
                <Label
                    iconPath={mdiFilmstrip}
                    iconSize={0.5}
                    children={'movie'}
                    textClassName={'text_small'}
                />
            </div>
            <h4 className="movie_card_title">{movie.title}</h4>
        </Link>
    );
};

export default MovieCard;
