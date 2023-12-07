import { FC } from 'react';
import { MdStarRate, MdOutlineRecordVoiceOver } from 'react-icons/md';
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
            <MdStarRate className="movie_rating_icon" />
            <p className="movie_rating">{movie.voteAverage}</p>
            <MdOutlineRecordVoiceOver className="movie_votes_icon" />
            <p className="movie_votes">{movie.voteCount}</p>
        </div>
    );
};

export default Paragraph;
