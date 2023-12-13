import { FC } from 'react';
import Icon from '@mdi/react';

import './IconDot.css';

interface DotProps {
    path: string;
    size: number;
}

const IconDot: FC<DotProps> = ({ path, size }) => {
    return <Icon path={path} size={size} className="dot" />;
};

export default IconDot;
