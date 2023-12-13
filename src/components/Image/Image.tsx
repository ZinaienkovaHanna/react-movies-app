import { FC, useState } from 'react';

import './Image.css';

interface ImageProps {
    image: string;
    title: string;
}

const Image: FC<ImageProps> = ({ image, title }) => {
    const [imgSrc, setImgSrc] = useState<string>(image);

    const handleError = () => setImgSrc('/static/images/placeholderImage.png');

    return (
        <img
            src={imgSrc}
            alt={title}
            className="movie_card_img"
            onError={handleError}
        />
    );
};

export default Image;
