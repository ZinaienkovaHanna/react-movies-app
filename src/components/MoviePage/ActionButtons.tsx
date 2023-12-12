import { FC } from 'react';
import Icon from '@mdi/react';
import {
    mdiAccountVoice,
    mdiStar,
    mdiThumbUpOutline,
    mdiThumbDownOutline,
    mdiBookmarkOutline,
} from '@mdi/js';
import { MovieType } from '../../types';

import './ActionButtons.css';

interface ActionButtonsProps {
    movie: MovieType;
}

const MovieActionButtons: FC<ActionButtonsProps> = ({ movie }) => {
    return (
        <div className="actions_button_container">
            <Icon path={mdiStar} size={1} className="rating" />
            <p className="movie_page_rating">{movie.voteAverage.toFixed(1)}</p>
            <Icon path={mdiAccountVoice} size={1} className="votes" />
            <p className="movie_page_votes">{movie.voteCount}</p>
            <Icon path={mdiThumbUpOutline} size={1} className="like" />
            <Icon path={mdiThumbDownOutline} size={1} className="dislike" />
            <Icon path={mdiBookmarkOutline} size={1} className="bookmark" />
        </div>
    );
};

export default MovieActionButtons;
