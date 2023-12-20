import { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    mdiThumbUpOutline,
    mdiThumbDownOutline,
    mdiBookmarkOutline,
    mdiYoutube,
    mdiThumbUp,
    mdiThumbDown,
} from '@mdi/js';
import IconButton from '../IconButton';

interface MovieActionsProps {
    movieId: number;
    pathLink: string;
}

const MovieActions: FC<MovieActionsProps> = ({ movieId, pathLink }) => {
    const [liked, setLiked] = useState<boolean>(false);
    const [disliked, setDisliked] = useState<boolean>(false);

    useEffect(() => {
        const likedStatus = localStorage.getItem(`liked_${movieId}`);
        const dislikedStatus = localStorage.getItem(`disliked_${movieId}`);

        if (likedStatus !== null) {
            setLiked(likedStatus === 'true');
        }

        if (dislikedStatus !== null) {
            setDisliked(dislikedStatus === 'true');
        }
    }, [movieId]);

    const handleLikeClick = () => {
        setLiked(!liked);
        setDisliked(false);
        localStorage.setItem(`liked_${movieId}`, (!liked).toString());
        localStorage.removeItem(`disliked_${movieId}`);
    };

    const handleDisLikeClick = () => {
        setDisliked(!disliked);
        setLiked(false);
        localStorage.setItem(`disliked_${movieId}`, (!disliked).toString());
        localStorage.removeItem(`liked_${movieId}`);
    };

    return (
        <>
            <IconButton
                iconPath={liked ? mdiThumbUp : mdiThumbUpOutline}
                iconSize={1}
                onClick={handleLikeClick}
            />
            <IconButton
                iconPath={disliked ? mdiThumbDown : mdiThumbDownOutline}
                iconSize={1}
                onClick={handleDisLikeClick}
            />
            <IconButton iconPath={mdiBookmarkOutline} iconSize={1} />
            <Link to={`/${pathLink}/${movieId}/trailer`}>
                <IconButton iconPath={mdiYoutube} iconSize={2} />
            </Link>
        </>
    );
};

export default MovieActions;
