import MoviesItem from "./MovieItem";
import movies from "./movies";
const MoviesList = () => {
  const moviesList = movies.map((movies) => (
    <MoviesItem title={movies.title} key={movies.genre} image={movies.poster} />
  ));

  return moviesList;
};

export default MoviesList;
