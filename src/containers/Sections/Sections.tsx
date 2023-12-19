import { FC } from 'react';
import { SectionType } from '../../types/moviesTypes';
import MovieList from '../../components/MovieList';

interface SectionProps {
    sections: SectionType[];
    pathLink?: string;
}

const Sections: FC<SectionProps> = ({ sections, pathLink }) => {
    return (
        <>
            {sections.map((section) => (
                <MovieList
                    key={section.id}
                    title={section.title}
                    movies={section.movies}
                    mediaType={section.mediaType}
                    pathLink={pathLink}
                />
            ))}
        </>
    );
};

export default Sections;
