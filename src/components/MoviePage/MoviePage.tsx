import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mdiStar, mdiAccountVoice } from '@mdi/js';
import { getMovieById } from '../../services';
import Image from '../Image';
import MovieInfo from '../MovieInfo';
import Paragraph from '../Paragraph';
import Label from '../Label';
import ButtonBar from '../ButtonBar';
import { MovieType } from '../../types/moviesTypes';

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

    useEffect(() => {
        const fetchMovieById = async () => {
            try {
                if (id) {
                    const fetchedMovie = await getMovieById(id);
                    setMovie(fetchedMovie);
                }
            } catch (error) {
                console.error('Error fetching movie:', error);
            }
        };

        fetchMovieById();
    }, []);

    return (
        <div className="movie_page_container">
            <Image
                image={movie.posterPath}
                alt={movie.title}
                className={'movie_page_img'}
            />
            <div>
                <h2 className="movie_page_title">{movie.title}</h2>
                <MovieInfo
                    releaseDate={movie.releaseDate}
                    genres={movie.genres}
                    runtime={movie.runtime}
                />
                <div className="button_container">
                    <Label
                        path={mdiStar}
                        size={1}
                        text={movie.voteAverage.toFixed(1)}
                        className={'padding_large'}
                    />
                    <Label
                        path={mdiAccountVoice}
                        size={1}
                        text={movie.voteCount}
                        className={'padding_large'}
                    />
                    <ButtonBar />
                </div>
                <Paragraph text={movie.tagline} />
                <h3 className="movie_page_title_description">Description</h3>
                <Paragraph text={movie.overview} />
            </div>
        </div>
    );
};

export default MoviePage;
