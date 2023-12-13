import { FC } from 'react';
import { getPopularMovies, getTopRatedMovies } from '../../services';
import { MovieType } from '../../types/moviesTypes';
import MovieList from '../../components/MovieList';

interface SectionType {
    id: number;
    title: string;
    dataHandler: () => Promise<MovieType[]>;
}

const Sections: FC = () => {
    const SECTIONS: SectionType[] = [
        {
            id: 0,
            title: 'Popular',
            dataHandler: getPopularMovies,
        },
        {
            id: 1,
            title: 'Top Rated',
            dataHandler: getTopRatedMovies,
        },
    ];
    return (
        <>
            {SECTIONS.map((section) => (
                <MovieList
                    key={section.id}
                    title={section.title}
                    fetchMovies={section.dataHandler}
                />
            ))}
        </>
    );
};

export default Sections;
