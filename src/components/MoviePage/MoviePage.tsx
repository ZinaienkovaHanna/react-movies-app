import { FC } from 'react';
import { mdiStar, mdiAccountVoice } from '@mdi/js';
import Image from '../Image';
import MovieInfo from '../MovieInfo';
import Paragraph from '../Paragraph';
import Label from '../Label';
import ButtonBar from '../ButtonBar';
import { MovieType } from '../../types/moviesTypes';

import './MoviePage.css';

interface MoviePageProps {
    movie: MovieType;
}

const MoviePage: FC<MoviePageProps> = ({ movie }) => {
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
                    <ButtonBar movieId={movie.id} />
                </div>
                <Paragraph text={movie.tagline} />
                <h3 className="movie_page_title_description">Description</h3>
                <Paragraph text={movie.overview} />
            </div>
        </div>
    );
};

export default MoviePage;
