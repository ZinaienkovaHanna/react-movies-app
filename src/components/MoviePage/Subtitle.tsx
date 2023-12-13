import { FC } from 'react';
import { MovieType } from '../../types';
import { convertToHoursAndMinutes } from '../../utils/convertToHoursAndMinutes';

import './Subtitle.css';

interface SubtitleProps {
    movie: MovieType;
}

const Subtitle: FC<SubtitleProps> = ({ movie }) => {
    return (
        <div className="subtitle_container">
            <p>{movie.releaseDate}</p>

            {movie.genres.map((genre) => (
                <p key={genre.id}>{genre.name}</p>
            ))}

            <p>{convertToHoursAndMinutes(movie.runtime)}</p>
        </div>
    );
};

export default Subtitle;
