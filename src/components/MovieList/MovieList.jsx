import './MovieList.scss';
import moviesFromServer from '../../api/movies.json';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieList = ({ movies = moviesFromServer }) => {
  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  );
};
