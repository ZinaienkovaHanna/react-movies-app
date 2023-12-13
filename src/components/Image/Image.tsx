import { FC, useState } from 'react';

import './Image.css';

interface ImageProps {
    image: string;
    alt: string;
    className: string;
}

const Image: FC<ImageProps> = ({ image, alt, className }) => {
    const [imgSrc, setImgSrc] = useState<string>(image);

    const handleError = () => setImgSrc('/static/images/placeholderImage.png');

    const handleLoad = () => setImgSrc(image);

    return (
        <img
            src={imgSrc}
            alt={alt}
            className={`image ${className}`}
            onError={handleError}
            onLoad={handleLoad}
        />
    );
};

export default Image;
