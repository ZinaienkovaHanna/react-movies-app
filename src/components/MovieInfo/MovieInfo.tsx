import { FC } from 'react';
import P from '../P';
import DotDivider from '../DotDivider';
import { convertToHoursAndMinutes } from '../../utils/convertToHoursAndMinutes';
import { getYearFromDate } from '../../utils/getYearFromDate';
import { getGenreInfo } from '../../utils/getGenreInfo';

import './MovieInfo.css';
import { MovieType, SeriesType } from '../../types/moviesTypes';

interface MovieInfoProps {
    movie: SeriesType | MovieType;
}

const MovieInfo: FC<MovieInfoProps> = ({ movie }) => {
    return (
        <div className="movie_info_container">
            <P
                children={getYearFromDate(movie.releaseDate)}
                textTitle={movie.releaseDate}
            />
            <DotDivider />
            <P children={getGenreInfo(movie.genres)} />
            <DotDivider />
            {movie.mediaType === 'movies' ? (
                <P
                    children={convertToHoursAndMinutes(
                        (movie as MovieType).runtime
                    )}
                />
            ) : (
                <P
                    children={`${(movie as SeriesType).seasons} seasons, ${
                        (movie as SeriesType).episodes
                    } episodes`}
                />
            )}
        </div>
    );
};

export default MovieInfo;
