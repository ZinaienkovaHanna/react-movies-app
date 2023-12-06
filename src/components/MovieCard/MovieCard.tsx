import { MdStarRate } from 'react-icons/md';
import { MdOutlineRecordVoiceOver } from 'react-icons/md';
import { MovieCardProps } from '../../types/moviesTypes';
import { getYearFromDate } from '../../utils/getYearFromDate';

import './MovieCard.css';

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    return (
        <div className="movie_card">
            <img
                src={movie.poster_path}
                alt={movie.title}
                className="movie_card_img"
            />
            <div className="movie_card_flex">
                <p className="movie_year">
                    {getYearFromDate(movie.release_date)}
                </p>
                <MdStarRate className="movie_rating_icon" />
                <p className="movie_rating">{movie.vote_average}</p>
                <MdOutlineRecordVoiceOver className="movie_votes_icon" />
                <p className="movie_votes">{movie.vote_count}</p>
            </div>
            <h4 className="movie_card_title">{movie.title}</h4>
        </div>
    );
};

export default MovieCard;
