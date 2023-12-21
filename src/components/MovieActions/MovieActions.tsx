import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    mdiThumbUpOutline,
    mdiThumbDownOutline,
    mdiBookmarkOutline,
    mdiYoutube,
    mdiThumbUp,
    mdiThumbDown,
    mdiBookmark,
} from '@mdi/js';
import IconButton from '../IconButton';
import { MediaStatusType } from '../../types/moviesTypes';
import { getMovieStatus, updateMovieStatus } from '../../utils/localStorage';

interface MovieActionsProps {
    movieId: number;
    mediaType: string;
}

const MovieActions: FC<MovieActionsProps> = ({ movieId, mediaType }) => {
    const [status, setStatus] = useState<MediaStatusType>({
        reaction: 'undefined',
        bookmarked: 'undefined',
    });

    useEffect(() => {
        const storedStatus = getMovieStatus(mediaType, movieId);

        if (storedStatus) {
            setStatus(storedStatus);
        }
    }, [mediaType, movieId]);

    const handleLikeClick = () => {
        const newStatus: MediaStatusType = {
            ...status,
            reaction: status.reaction === 'liked' ? 'undefined' : 'liked',
        };
        setStatus(newStatus);
        updateMovieStatus(mediaType, movieId, newStatus);
    };

    const handleDislikeClick = () => {
        const newStatus: MediaStatusType = {
            ...status,
            reaction: status.reaction === 'disliked' ? 'undefined' : 'disliked',
        };
        setStatus(newStatus);
        updateMovieStatus(mediaType, movieId, newStatus);
    };

    const handleBookmarkClick = () => {
        const newStatus: MediaStatusType = {
            ...status,
            bookmarked: status.bookmarked === 'true' ? 'false' : 'true',
        };
        setStatus(newStatus);
        updateMovieStatus(mediaType, movieId, newStatus);
    };

    return (
        <>
            <IconButton
                iconPath={
                    status.reaction === 'liked' ? mdiThumbUp : mdiThumbUpOutline
                }
                iconSize={1}
                onClick={handleLikeClick}
            />
            <IconButton
                iconPath={
                    status.reaction === 'disliked'
                        ? mdiThumbDown
                        : mdiThumbDownOutline
                }
                iconSize={1}
                onClick={handleDislikeClick}
            />
            <IconButton
                iconPath={
                    status.bookmarked === 'true'
                        ? mdiBookmark
                        : mdiBookmarkOutline
                }
                iconSize={1}
                onClick={handleBookmarkClick}
            />
            <Link to={`/${mediaType}/${movieId}/trailer`}>
                <IconButton iconPath={mdiYoutube} iconSize={2} />
            </Link>
        </>
    );
};

export default MovieActions;
