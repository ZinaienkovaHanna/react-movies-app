import { FC, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { MovieType } from '../../types/moviesTypes';
import MovieList from '../../components/MovieList';

const Home: FC = () => {
    const { moviesDay, moviesWeek } = useLoaderData() as {
        moviesWeek: MovieType[];
        moviesDay: MovieType[];
    };

    const [showToday, setShowToday] = useState<boolean>(true);

    const handleTodayButtonClick = () => {
        setShowToday(true);
    };

    const handleWeekButtonClick = () => {
        setShowToday(false);
    };

    return (
        <MovieList
            title="Trending"
            movies={showToday ? moviesDay : moviesWeek}
            mediaType="movie"
            pathLink="/"
        >
            <div className="button_toggle_container">
                <button
                    onClick={handleTodayButtonClick}
                    className={
                        showToday
                            ? 'button_today active_button'
                            : 'button_today'
                    }
                >
                    today
                </button>
                <button
                    onClick={handleWeekButtonClick}
                    className={
                        !showToday
                            ? 'button_week active_button '
                            : 'button_week'
                    }
                >
                    this week
                </button>
            </div>
        </MovieList>
    );
};

export default Home;
