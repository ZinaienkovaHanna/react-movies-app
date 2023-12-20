import { FC, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { MovieType } from '../types/moviesTypes';
import MovieList from '../components/MovieList';

const Home: FC = () => {
    const { moviesDay, moviesWeek, moviesTopRated } = useLoaderData() as {
        moviesWeek: MovieType[];
        moviesDay: MovieType[];
        moviesTopRated: MovieType[];
    };
    const [showToday, setShowToday] = useState<boolean>(true);

    const handleTodayButtonClick = () => {
        setShowToday(true);
    };

    const handleWeekButtonClick = () => {
        setShowToday(false);
    };

    return (
        <>
            <MovieList
                title="Trending"
                movies={showToday ? moviesDay : moviesWeek}
                mediaType="movie"
                pathLink="movies"
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
            <MovieList
                title="Top Rated"
                movies={moviesTopRated}
                mediaType="movie"
                pathLink="movies"
            />
        </>
    );
};

export default Home;
