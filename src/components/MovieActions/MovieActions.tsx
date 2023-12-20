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

interface MovieActionsProps {
    movieId: number;
    pathLink: string;
}

const MovieActions: FC<MovieActionsProps> = ({ movieId, pathLink }) => {
    const [liked, setLiked] = useState<boolean>(false);
    const [disliked, setDisliked] = useState<boolean>(false);
    const [bookmarked, setBookmarked] = useState<boolean>(false);

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

    useEffect(() => {
        const bookmarkStatus = localStorage.getItem('bookmarked_movies');

        if (bookmarkStatus !== null) {
            const bookmarkedMovies: number[] = JSON.parse(bookmarkStatus);
            setBookmarked(bookmarkedMovies.includes(movieId));
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

    const handleBookmarkClick = () => {
        const bookmarkStatus = localStorage.getItem('bookmarked_movies');
        let bookmarkedMovies: number[] = bookmarkStatus
            ? JSON.parse(bookmarkStatus)
            : [];

        if (bookmarked) {
            bookmarkedMovies = bookmarkedMovies.filter((id) => id !== movieId);
        } else {
            bookmarkedMovies.push(movieId);
        }

        localStorage.setItem(
            'bookmarked_movies',
            JSON.stringify(bookmarkedMovies)
        );

        setBookmarked(!bookmarked);
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
            <IconButton
                iconPath={bookmarked ? mdiBookmark : mdiBookmarkOutline}
                iconSize={1}
                onClick={handleBookmarkClick}
            />
            <Link to={`/${pathLink}/${movieId}/trailer`}>
                <IconButton iconPath={mdiYoutube} iconSize={2} />
            </Link>
        </>
    );
};

export default MovieActions;
