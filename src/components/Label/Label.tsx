import { FC } from 'react';
import Icon from '@mdi/react';
import Paragraph from '../Paragraph';

import './Label.css';

interface LabelProps {
    path: string;
    size: number;
    text: string | number;
    className?: string;
}

const Label: FC<LabelProps> = ({ path, size, text, className }) => {
    return (
        <>
            <Icon path={path} size={size} className="icon" />
            <Paragraph text={text} className={className} />
        </>
    );
};

export default Label;
