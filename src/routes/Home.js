import {useState, useEffect} from "react";
import Movie from "../components/Movie"

function Home() {
    const [waiting, setWaiting] = useState(true);
    const [movies, setMovies] = useState([]);
    function onSubmit(event) {
        event.preventDefault();
        fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=" + String(event.target[0].value) + "&sort_by=year"
        ).then(response => response.json()).then(json => setMovies(json.data.movies));
        setWaiting(false);
    }
    return (
        <div>
        <form onSubmit={onSubmit}>
            <input placeholder="Minimum Rating" type="number" step="0.1">
            </input>
            <button>Submit</button>
        </form>
        {waiting ? <h1>waiting...</h1> : 
        <div>
            {movies.map(movie => 
            <Movie 
            key={movie.id}
            coverImage={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
            />)}
        </div>
        }
        </div>
    );
}
export default Home;