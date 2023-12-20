import { FC } from 'react';
import Icon from '@mdi/react';
import P from '../P';

import './Label.css';

interface LabelProps {
    iconPath: string;
    iconSize: number;
    children: string | number;
    textClassName?: string;
}

const Label: FC<LabelProps> = ({
    iconPath,
    iconSize,
    children,
    textClassName,
}) => {
    return (
        <>
            <Icon path={iconPath} size={iconSize} className="icon" />
            <P children={children} textClassName={textClassName} />
        </>
    );
};

export default Label;
