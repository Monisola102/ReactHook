function MovieCard({ movie }) {
  return (
    <div className="card">
      <div className="card-content">
        <img className="pic" src={movie.posterURL} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <span>Rating: {movie.rating}</span>
      </div>
    </div>
  );
}
export default MovieCard;