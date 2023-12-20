import { FC } from 'react';
import { mdiWindowClose } from '@mdi/js';
import { useNavigate } from 'react-router-dom';
import YouTube, { YouTubeProps } from 'react-youtube';
import IconButton from '../IconButton';
import './MovieTrailerModal.css';

interface MovieTrailerModalProps {
    trailerKey: string;
}

const MovieTrailerModal: FC<MovieTrailerModalProps> = ({ trailerKey }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('..', { relative: 'path' });
    };

    const opts: YouTubeProps['opts'] = {
        height: '468',
        width: '768',
    };

    return (
        <div className="modal_container">
            <IconButton
                iconPath={mdiWindowClose}
                iconSize={1}
                iconClassName="close"
                onClick={handleClick}
            />
            <YouTube videoId={trailerKey} opts={opts} />
        </div>
    );
};

export default MovieTrailerModal;
