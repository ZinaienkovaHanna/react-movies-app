import { FC } from 'react';
import { mdiStar, mdiAccountVoice } from '@mdi/js';
import Image from '../Image';
import MovieInfo from '../MovieInfo';
import P from '../P';
import Label from '../Label';
import MovieActions from '../MovieActions';
import { MovieType } from '../../types/moviesTypes';

import './MoviePage.css';

interface MoviePageProps {
    movie: MovieType;
    mediaType: string;
    pathLink: string;
}

const MoviePage: FC<MoviePageProps> = ({ movie, mediaType, pathLink }) => {
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
                    episodes={movie.episodes}
                    seasons={movie.seasons}
                    mediaType={mediaType}
                />
                <div className="button_container">
                    <Label
                        iconPath={mdiStar}
                        iconSize={1}
                        children={movie.voteAverage.toFixed(1)}
                        textClassName={'padding_large'}
                    />
                    <Label
                        iconPath={mdiAccountVoice}
                        iconSize={1}
                        children={movie.voteCount}
                        textClassName={'padding_large'}
                    />
                    <MovieActions movieId={movie.id} pathLink={pathLink} />
                </div>
                <P children={movie.tagline} />
                <h3 className="movie_page_title_description">Description</h3>
                <P children={movie.overview} />
            </div>
        </div>
    );
};

export default MoviePage;
