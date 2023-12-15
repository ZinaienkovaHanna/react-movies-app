import { FC } from 'react';
import { mdiWindowClose } from '@mdi/js';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import './MovieTrailerModal.css';

interface MovieTrailerModalProps {
    trailerKey: string;
}

const MovieTrailerModal: FC<MovieTrailerModalProps> = ({ trailerKey }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('..', { relative: 'path' });
    };
    return (
        <div className="modal_container">
            <Button
                path={mdiWindowClose}
                size={1}
                className="close"
                onClick={handleClick}
            />
            <iframe
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title="Movie trailer"
                className="video"
            />
        </div>
    );
};

export default MovieTrailerModal;
