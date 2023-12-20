import { FC } from 'react';
import Icon from '@mdi/react';

import './IconButton.css';

interface IconButtonProps {
    iconPath: string;
    iconSize: number;
    iconClassName?: string;
    onClick?: () => void;
}

const IconButton: FC<IconButtonProps> = ({
    iconPath,
    iconSize,
    iconClassName,
    onClick,
}) => {
    return (
        <button className={`button ${iconClassName}`} onClick={onClick}>
            <Icon path={iconPath} size={iconSize} />
        </button>
    );
};

export default IconButton;
