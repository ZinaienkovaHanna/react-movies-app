import { FC } from 'react';
import Icon from '@mdi/react';

import './Button.css';

interface ButtonProps {
    path: string;
    size: number;
}

const Button: FC<ButtonProps> = ({ path, size }) => {
    return (
        <button className="button">
            <Icon path={path} size={size} />
        </button>
    );
};

export default Button;
