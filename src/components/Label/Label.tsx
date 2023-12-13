import { FC } from 'react';
import Icon from '@mdi/react';
import Paragraph from '../Paragraph';

import './Label.css';

interface LabelProps {
    path: string;
    size: number;
    text: string | number;
}

const Label: FC<LabelProps> = ({ path, size, text }) => {
    return (
        <>
            <Icon path={path} size={size} className="icon" />
            <Paragraph text={text} />
        </>
    );
};

export default Label;
