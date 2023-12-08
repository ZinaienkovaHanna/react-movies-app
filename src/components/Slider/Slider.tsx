import {
    FC,
    ReactNode,
    useState,
    useEffect,
    Children,
    cloneElement,
    ReactElement,
} from 'react';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

import './Slider.css';

interface CarouselProps {
    children: ReactNode;
}

const CARDS_WIDTH = 1200;

const Carousel: FC<CarouselProps> = ({ children }) => {
    const [cards, setCards] = useState<React.ReactNode[]>([]);
    const [offset, setOffset] = useState(0);

    const goToPrevSlides = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + CARDS_WIDTH;
            return Math.min(newOffset, 0);
        });
    };

    const goToNextSlides = () => {
        setOffset((currentOffset) => {
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
        <div className="carousel_container">
            <MdArrowBackIos className="prev_arrow" onClick={goToPrevSlides} />
            <div className="window">
                <div
                    className="movies_list_container"
                    style={{
                        transform: `translateX(${offset}px)`,
                    }}
                >
                    {children}
                </div>
            </div>
            <MdArrowForwardIos
                className="next_arrow"
                onClick={goToNextSlides}
            />
        </div>
    );
};

export default Carousel;
