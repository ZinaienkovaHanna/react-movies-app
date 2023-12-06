import TopRatedMovieCardList from './components/TopRatedMovieCardList/TopRatedMovieCardList';
import PopularMovieCardList from './components/PopularMovieCardList/PopularMovieCardList';
import './App.css';

function App() {
    return (
        <div className="App">
            <TopRatedMovieCardList />
            <PopularMovieCardList />
        </div>
    );
}

export default App;
