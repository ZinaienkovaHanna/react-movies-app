import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../../services';
import Image from './Image';
import Subtitle from './Subtitle';
import ActionButtons from './ActionButtons';
import { MovieType } from '../../types';

import './MoviePage.css';

const MoviePage: FC = () => {
    const defaultMovie = {
        id: 0,
        title: '',
        releaseDate: '',
        voteAverage: 0,
        voteCount: 0,
        posterPath: '',
        backdropPath: '',
        genres: [],
        overview: '',
        runtime: 0,
        tagline: '',
    };

    const { id } = useParams<{ id: string }>();
    const [movie, setMovie] = useState<MovieType>(defaultMovie);
    const [loader, setLoader] = useState<boolean>(true);

    useEffect(() => {
        const fetchMovieById = async () => {
            try {
                if (id) {
                    const fetchedMovie = await getMovieById(id);
                    setMovie(fetchedMovie);
                }
            } catch (error) {
                console.error('Error fetching movie:', error);
            } finally {
                setLoader(false);
            }
        };

        fetchMovieById();
    }, []);

    return (
        <div className="movie_page_container">
            <Image movie={movie} loader={loader} />
            <div>
                <h1 className="movie_page_title">{movie.title}</h1>
                <Subtitle movie={movie} />
                <ActionButtons movie={movie} />
                <h3 className="movie_page_title_description">Description</h3>
                <p className="movie_page_description">{movie.overview}</p>
            </div>
        </div>
    );
};

export default MoviePage;
