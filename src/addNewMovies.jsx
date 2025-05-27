import { useState } from "react";
function Newmovies({onAdd}) {
  const [newMovies, setNewMovies] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovies({
      ...newMovies,
      [name]: name === "rating" ? Number(value) : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(newMovies);
    setNewMovies({ title: "", description: "", posterURL: "", rating: 0 });
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        name="title"
        value={newMovies.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        name="description"
        value={newMovies.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        name="posterURL"
        value={newMovies.posterURL}
        onChange={handleChange}
        placeholder="Poster URL"
        required
      />
      <input
        name="rating"
        type="number"
        min="0"
        max="5"
        value={newMovies.rating}
        onChange={handleChange}
        placeholder="Rating"
        required
      />
      <button className="btn"  type="submit">Add Movie</button>
    </form>
  );
}
export default Newmovies;