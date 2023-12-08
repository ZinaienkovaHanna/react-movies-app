import { FC } from 'react';
import Icon from '@mdi/react';
import { mdiAccountVoice, mdiStar, mdiFilmstrip } from '@mdi/js';
import { getYearFromDate } from '../../utils/getYearFromDate';
import { MovieType } from '../../types/moviesTypes';

import './Paragraph.css';

interface ParagraphProps {
    movie: MovieType;
}

const Paragraph: FC<ParagraphProps> = ({ movie }) => {
    return (
        <div className="movie_card_container">
            <p className="movie_year">{getYearFromDate(movie.releaseDate)}</p>
            <Icon path={mdiStar} size={0.55} className="movie_rating_icon" />
            <p className="movie_rating">{movie.voteAverage.toFixed(1)}</p>
            <Icon
                path={mdiAccountVoice}
                size={0.5}
                className="movie_votes_icon"
            />
            <p className="movie_votes">{movie.voteCount}</p>
            <Icon path={mdiFilmstrip} size={0.55} className="movie_name_icon" />
            <p className="movie_name">movie</p>
        </div>
    );
};

export default Paragraph;
