import MovieCard from "./movieCard";

function MovieList({ movies }) {
  return (
    <div className="movielist">
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
}
export default MovieList;