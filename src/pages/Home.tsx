import { FC, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { MovieType } from '../types/moviesTypes';
import MovieList from '../components/MovieList';

const Home: FC = () => {
    const { dailyMovies, weeklyMovies, topRatedMovies } = useLoaderData() as {
        weeklyMovies: MovieType[];
        dailyMovies: MovieType[];
        topRatedMovies: MovieType[];
    };
    const [showToday, setShowToday] = useState<boolean>(true);

    const buttonTodayClass = showToday
        ? 'button_today active_button'
        : 'button_today';
    const buttonWeekClass = !showToday
        ? 'button_week active_button'
        : 'button_week';

    return (
        <>
            <MovieList
                title="Trending"
                movies={showToday ? dailyMovies : weeklyMovies}
            >
                <div className="button_toggle_container">
                    <button
                        onClick={() => setShowToday(true)}
                        className={buttonTodayClass}
                    >
                        today
                    </button>
                    <button
                        onClick={() => setShowToday(false)}
                        className={buttonWeekClass}
                    >
                        this week
                    </button>
                </div>
            </MovieList>
            <MovieList title="Top Rated" movies={topRatedMovies} />
        </>
    );
};

export default Home;
