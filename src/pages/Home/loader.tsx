import { getTrendingMovies } from '../../services';

export const loader = async () => {
    const moviesDay = await getTrendingMovies('day');
    const moviesWeek = await getTrendingMovies('week');

    return { moviesDay, moviesWeek };
};
