import MovieList from '../MovieList/MovieList';
import { getTopRatedMovies } from '../../services/moviesAPI';

const TopRatedMovieCardList: React.FC = () => {
    return <MovieList title="Top Rated" fetchMovies={getTopRatedMovies} />;
};

export default TopRatedMovieCardList;
