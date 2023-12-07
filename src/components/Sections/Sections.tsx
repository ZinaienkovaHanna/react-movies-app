import { getPopularMovies, getTopRatedMovies } from '../../services/moviesAPI';
import MovieList from '../MovieList/MovieList';
import { MovieType } from '../../types/moviesTypes';

interface SectionType {
    id: number;
    title: string;
    dataHandler: () => Promise<MovieType[]>;
}

const Sections: React.FC = () => {
    const SECTIONS: SectionType[] = [
        {
            id: 1,
            title: 'Popular',
            dataHandler: getPopularMovies,
        },
        {
            id: 2,
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
