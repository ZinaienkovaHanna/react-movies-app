import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { mdiWindowClose } from '@mdi/js';
import YouTube, { YouTubeProps } from 'react-youtube';
import IconButton from '../IconButton';

import './MovieTrailerModal.css';

interface MovieTrailerModalType {
    trailerKey: string;
}

const MovieTrailerModal: FC<MovieTrailerModalType> = ({ trailerKey }) => {
    const navigate = useNavigate();

    const opts: YouTubeProps['opts'] = {
        height: '468',
        width: '768',
    };

    return (
        <div className="modal_container">
            <div className="modal_content">
                <IconButton
                    iconPath={mdiWindowClose}
                    iconSize={1}
                    iconClassName="close"
                    onClick={() => navigate(-1)}
                />
                <YouTube videoId={trailerKey} opts={opts} />
            </div>
        </div>
    );
};

export default MovieTrailerModal;
