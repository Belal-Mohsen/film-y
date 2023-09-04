import React, { useEffect, useState } from 'react';
import Search from './Search';
import MovieCard from './MovieCard';

import './App.css';




const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_MOVIES_API_KEY}`;


const App = () => {

    const [movies, setMovies] = useState([]);
    

    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovie('spiderman');
    }
        , []);
    return (
        <div className='app'>
            <h1>Film-y</h1>
            <Search searchMovie={searchMovie}/>
            {movies?.length > 0
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie} key={movie.imdbID} />))}
                    </div>

                ) : (
                    <div className="empty">
                        <h2> No movies found !</h2>
                    </div>
                )
            }
        </div>
    );
};


export default App;