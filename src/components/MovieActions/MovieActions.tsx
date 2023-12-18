import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
    mdiThumbUpOutline,
    mdiThumbDownOutline,
    mdiBookmarkOutline,
    mdiYoutube,
} from '@mdi/js';
import IconButton from '../IconButton';

interface MovieActionsProps {
    movieId: number;
}

const MovieActions: FC<MovieActionsProps> = ({ movieId }) => {
    return (
        <>
            <IconButton iconPath={mdiThumbUpOutline} iconSize={1} />
            <IconButton iconPath={mdiThumbDownOutline} iconSize={1} />
            <IconButton iconPath={mdiBookmarkOutline} iconSize={1} />

            <Link to={`/${movieId}/trailer`}>
                <IconButton iconPath={mdiYoutube} iconSize={2} />
            </Link>
        </>
    );
};

export default MovieActions;
