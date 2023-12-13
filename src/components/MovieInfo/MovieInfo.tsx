import { FC } from 'react';
import Paragraph from '../Paragraph';
import IconDot from '../IconDot';
import { convertToHoursAndMinutes } from '../../utils/convertToHoursAndMinutes';

import './MovieInfo.css';

interface MovieInfoProps {
    releaseDate: string;
    genres: { id: number; name: string }[];
    runtime: number;
}

const MovieInfo: FC<MovieInfoProps> = ({ releaseDate, genres, runtime }) => {
    const genresInfo = genres.map((genre) => genre.name).join(', ');

    return (
        <div className="movie_info_container">
            <Paragraph text={releaseDate} />
            <IconDot />
            <Paragraph text={genresInfo} />
            <IconDot />
            <Paragraph text={convertToHoursAndMinutes(runtime)} />
        </div>
    );
};

export default MovieInfo;
