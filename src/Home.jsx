// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const movies = [
    { id: '1', title: 'Movie Title 1', poster: 'poster1.jpg', description: 'Description of Movie 1', trailer: 'TRAILER_LINK_1' },
    { id: '2', title: 'Movie Title 2', poster: 'poster2.jpg', description: 'Description of Movie 2', trailer: 'TRAILER_LINK_2' },
    // Add more movies as needed
];

const Home = () => {
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <div className="movie-card" key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>
                        <h3>{movie.title}</h3>
                        <img src={movie.poster} alt={movie.title} />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Home;
