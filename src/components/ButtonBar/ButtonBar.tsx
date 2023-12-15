import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
    mdiThumbUpOutline,
    mdiThumbDownOutline,
    mdiBookmarkOutline,
    mdiYoutube,
} from '@mdi/js';
import Button from '../Button';

interface ButtonBarProps {
    movieId: number;
}

const ButtonBar: FC<ButtonBarProps> = ({ movieId }) => {
    return (
        <>
            <Button path={mdiThumbUpOutline} size={1} />
            <Button path={mdiThumbDownOutline} size={1} />
            <Button path={mdiBookmarkOutline} size={1} />

            <Link to={`/${movieId}/trailer`}>
                <Button path={mdiYoutube} size={2} />
            </Link>
        </>
    );
};

export default ButtonBar;
