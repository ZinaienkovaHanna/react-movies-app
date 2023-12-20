import React, { FC, ReactNode, useState } from 'react';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

import './Slider.css';

interface SliderProps {
    children: ReactNode;
}

const Slider: FC<SliderProps> = ({ children }) => {
    const CARDS_WIDTH = 1200;
    const MAX_SLIDES = 5;
    const [pxOffset, setPxOffset] = useState(0);
    const childArray = React.Children.toArray(children);

    const goToPrevSlides = () => {
        setPxOffset((currentOffset) => {
            const newOffset = currentOffset + CARDS_WIDTH;
            return Math.min(newOffset, 0);
        });
    };

    const goToNextSlides = () => {
        setPxOffset((currentOffset) => {
            const newOffset = currentOffset - CARDS_WIDTH;
            const maxOffset = -(
                CARDS_WIDTH *
                (childArray.length / MAX_SLIDES - 1)
            );
            return Math.max(newOffset, maxOffset);
        });
    };

    return (
        <div className="slider_container">
            <button className="prev_arrow" onClick={goToPrevSlides}>
                <Icon path={mdiChevronLeft} size={2} />
            </button>

            <div className="window">
                <div
                    className="movies_list_container"
                    style={{
                        transform: `translateX(${pxOffset}px)`,
                    }}
                >
                    {children}
                </div>
            </div>

            <button className="next_arrow" onClick={goToNextSlides}>
                <Icon path={mdiChevronRight} size={2} />
            </button>
        </div>
    );
};

export default Slider;
