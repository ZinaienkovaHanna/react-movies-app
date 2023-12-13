import { FC } from 'react';

import './Paragraph.css';

interface ParagraphProps {
    text: string | number;
    className?: string;
}

const Paragraph: FC<ParagraphProps> = ({ text, className }) => {
    return <p className={`paragraph ${className}`}>{text}</p>;
};

export default Paragraph;
