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
    pathLink: string;
}

const MovieActions: FC<MovieActionsProps> = ({ movieId, pathLink }) => {
    return (
        <>
            <IconButton iconPath={mdiThumbUpOutline} iconSize={1} />
            <IconButton iconPath={mdiThumbDownOutline} iconSize={1} />
            <IconButton iconPath={mdiBookmarkOutline} iconSize={1} />
            <Link to={`/${pathLink}/${movieId}/trailer`}>
                <IconButton iconPath={mdiYoutube} iconSize={2} />
            </Link>
        </>
    );
};

export default MovieActions;
