import { FC } from 'react';
import {
    mdiThumbUpOutline,
    mdiThumbDownOutline,
    mdiBookmarkOutline,
} from '@mdi/js';
import Button from '../Button';

const ButtonBar: FC = () => {
    return (
        <>
            <Button path={mdiThumbUpOutline} size={1} />
            <Button path={mdiThumbDownOutline} size={1} />
            <Button path={mdiBookmarkOutline} size={1} />
        </>
    );
};

export default ButtonBar;
