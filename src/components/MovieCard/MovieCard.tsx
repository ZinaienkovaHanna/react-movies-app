import { FC } from 'react';
import { mdiStar, mdiFilmstrip, mdiTelevisionClassic } from '@mdi/js';
import { MovieType, SeriesType } from '../../types/moviesTypes';
import Image from '../Image';
import P from '../P';
import DotDivider from '../DotDivider';
import Label from '../Label';
import { getYearFromDate } from '../../utils/getYearFromDate';

import './MovieCard.css';

interface MovieCardProps {
    movie: MovieType | SeriesType;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
    return (
        <div className="movie_card">
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
                    iconSize={0.6}
                    children={movie.voteAverage.toFixed(1)}
                    textClassName={'text_small'}
                />
                <DotDivider />
                <Label
                    iconPath={
                        movie.mediaType === 'movies'
                            ? mdiFilmstrip
                            : mdiTelevisionClassic
                    }
                    iconSize={0.6}
                    children={movie.mediaType}
                    textClassName={'text_small'}
                />
            </div>
            <h4 className="movie_card_title">{movie.title}</h4>
        </div>
    );
};

export default MovieCard;
