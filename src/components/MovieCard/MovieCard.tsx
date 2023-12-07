import { MovieType } from '../../types/moviesTypes';
import Image from './Image';
import Paragraph from './Paragraph';

import './MovieCard.css';

interface MovieCardProps {
    movie: MovieType;
    loader: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, loader }) => {
    return (
        <div className="movie_card">
            <Image movie={movie} loader={loader} />
            <Paragraph movie={movie} />
            <h4 className="movie_card_title">{movie.title}</h4>
        </div>
    );
};

export default MovieCard;
