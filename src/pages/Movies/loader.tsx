import { getMovies } from '../../services';

export const loader = async () => {
    const moviesUpcoming = await getMovies('upcoming');
    const moviesNowPlaying = await getMovies('now_playing');
    const moviesPopular = await getMovies('popular');
    const moviesTopRated = await getMovies('top_rated');

    return { moviesUpcoming, moviesNowPlaying, moviesPopular, moviesTopRated };
};
