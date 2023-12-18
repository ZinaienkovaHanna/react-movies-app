import { FC } from 'react';
import P from '../P';
import DotDivider from '../DotDivider';
import { convertToHoursAndMinutes } from '../../utils/convertToHoursAndMinutes';
import { getYearFromDate } from '../../utils/getYearFromDate';
import { getGenreInfo } from '../../utils/getGenreInfo';

import './MovieInfo.css';

interface MovieInfoProps {
    releaseDate: string;
    genres: { id: number; name: string }[];
    runtime: number;
}

const MovieInfo: FC<MovieInfoProps> = ({ releaseDate, genres, runtime }) => {
    return (
        <div className="movie_info_container">
            <P
                children={getYearFromDate(releaseDate)}
                textTitle={releaseDate}
            />
            <DotDivider />
            <P children={getGenreInfo(genres)} />
            <DotDivider />
            <P children={convertToHoursAndMinutes(runtime)} />
        </div>
    );
};

export default MovieInfo;
