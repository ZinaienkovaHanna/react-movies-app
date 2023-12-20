import { FC } from 'react';
import Icon from '@mdi/react';
import { mdiCircleSmall } from '@mdi/js';

import './DotDivider.css';

const DotDivider: FC = () => {
    return <Icon path={mdiCircleSmall} size={0.75} className="dot" />;
};

export default DotDivider;
