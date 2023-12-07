import MovieList from '../MovieList/MovieList';
import { getPopularMovies } from '../../services/moviesAPI';

const PopularMovieCardList: React.FC = () => {
    return <MovieList title="Popular" fetchMovies={getPopularMovies} />;
};

export default PopularMovieCardList;
