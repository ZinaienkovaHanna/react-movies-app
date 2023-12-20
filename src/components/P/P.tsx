import { FC } from 'react';

import './P.css';

interface PProps {
    children: string | number;
    textClassName?: string;
    textTitle?: string;
}

const P: FC<PProps> = ({ children, textClassName, textTitle }) => {
    return (
        <p className={`paragraph ${textClassName}`} title={textTitle}>
            {children}
        </p>
    );
};

export default P;
