import { FC } from 'react';
import Icon from '@mdi/react';

import './Button.css';

interface ButtonProps {
    path: string;
    size: number;
    className?: string;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ path, size, className, onClick }) => {
    return (
        <button className={`button ${className}`} onClick={onClick}>
            <Icon path={path} size={size} />
        </button>
    );
};

export default Button;
