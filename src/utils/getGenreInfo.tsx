import { GenreType } from '../types/moviesTypes';

export const getGenreInfo = (genres: GenreType[]) => {
    return genres.map((genre) => genre.name).join(', ');
};
