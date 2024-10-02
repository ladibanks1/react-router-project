// src/MovieDescription.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const movies = [
    { id: '1', title: 'Movie Title 1', description: 'Description of Movie 1', trailer: 'https://www.youtube.com/embed/TRAILER_LINK_1' },
    { id: '2', title: 'Movie Title 2', description: 'Description of Movie 2', trailer: 'https://www.youtube.com/embed/TRAILER_LINK_2' },
    // Add more movies as needed
];

const MovieDescription = () => {
    const { id } = useParams();
    const movie = movies.find(movie => movie.id === id);

    return (
        <div className="movie-description">
            {movie ? (
                <>
                    <h1>{movie.title}</h1>
                    <p>{movie.description}</p>
                    <iframe width="560" height="315" src={movie.trailer} frameBorder="0" allowFullScreen></iframe>
                    <br />
                    <Link to="/">Back to Home</Link>
                </>
            ) : (
                <p>Movie not found.</p>
            )}
        </div>
    );
};

export default MovieDescription;
