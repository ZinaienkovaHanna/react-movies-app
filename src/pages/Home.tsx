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

    return (
        <>
            <MovieList
                title="Trending"
                movies={showToday ? dailyMovies : weeklyMovies}
            >
                <div className="button_toggle_container">
                    <button
                        onClick={() => setShowToday(true)}
                        className={
                            showToday
                                ? 'button_today active_button'
                                : 'button_today'
                        }
                    >
                        today
                    </button>
                    <button
                        onClick={() => setShowToday(false)}
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
            <MovieList title="Top Rated" movies={topRatedMovies} />
        </>
    );
};

export default Home;
