import MovieCardList from '../MovieCardList/MovieCardList';
import { getPopularMovies } from '../../services/moviesAPI';

const PopularMovieCardList: React.FC = () => {
    return <MovieCardList title="Popular" fetchMovies={getPopularMovies} />;
};

export default PopularMovieCardList;
