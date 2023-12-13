import {
    FC,
    ReactNode,
    useState,
    useEffect,
    Children,
    cloneElement,
    ReactElement,
} from 'react';
import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

import './Slider.css';

interface SliderProps {
    children: ReactNode;
}

const CARDS_WIDTH = 1200;

const Slider: FC<SliderProps> = ({ children }) => {
    const [cards, setCards] = useState<React.ReactNode[]>([]);
    const [pxOffset, setPxOffset] = useState(0);

    const goToPrevSlides = () => {
        setPxOffset((currentOffset) => {
            const newOffset = currentOffset + CARDS_WIDTH;
            return Math.min(newOffset, 0);
        });
    };

    const goToNextSlides = () => {
        setPxOffset((currentOffset) => {
            const newOffset = currentOffset - CARDS_WIDTH;
            const maxOffset = -(CARDS_WIDTH * (cards.length / 5 - 1));
            return Math.max(newOffset, maxOffset);
        });
    };

    useEffect(() => {
        if (children) {
            const modifiedChildren = Children.map(children, (child) => {
                return cloneElement(child as ReactElement, {
                    style: {
                        height: '100%',
                        minWidth: `${CARDS_WIDTH}px`,
                        maxWidth: `${CARDS_WIDTH}px`,
                    },
                });
            });

            if (modifiedChildren && modifiedChildren.length > 0) {
                setCards(modifiedChildren);
            }
        }
    }, [children]);

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
