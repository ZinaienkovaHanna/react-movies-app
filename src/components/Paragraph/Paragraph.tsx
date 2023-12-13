import { FC } from 'react';

import './Paragraph.css';

interface ParagraphProps {
    text: string | number;
}

const Paragraph: FC<ParagraphProps> = ({ text }) => {
    return <p className="movie_text">{text}</p>;
};

export default Paragraph;
