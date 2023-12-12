import { FC } from 'react';
import { MovieType } from '../../types';
import placeholderImage from './images/placeholderImage.png';

import './Image.css';

interface ImageProps {
    movie: MovieType;
    loader: boolean;
}

const Image: FC<ImageProps> = ({ movie, loader }) => {
    return (
        <img
            src={loader ? placeholderImage : movie.backdropPath}
            alt={movie.title}
            className="movie_card_img"
        />
    );
};

export default Image;
