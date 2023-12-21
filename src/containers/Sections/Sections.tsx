import { FC } from 'react';
import { SectionType } from '../../types/moviesTypes';
import MovieList from '../../components/MovieList';

interface SectionProps {
    sections: SectionType[];
}

const Sections: FC<SectionProps> = ({ sections }) => {
    return (
        <>
            {sections.map((section) => (
                <MovieList
                    key={section.id}
                    title={section.title}
                    movies={section.movies}
                />
            ))}
        </>
    );
};

export default Sections;
