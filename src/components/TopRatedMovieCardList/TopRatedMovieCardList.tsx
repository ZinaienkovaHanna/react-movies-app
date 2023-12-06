import MovieCardList from '../MovieCardList/MovieCardList';
import { getTopRatedMovies } from '../../services/moviesAPI';

const TopRatedMovieCardList: React.FC = () => {
    return <MovieCardList title="Top Rated" fetchMovies={getTopRatedMovies} />;
};

export default TopRatedMovieCardList;
