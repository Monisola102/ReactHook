import { useState } from "react";
import MovieList from "./movieList";
import Filter from "./filter";
import Newmovies from "./addNewMovies";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Power",
      description:
        "Power is a gripping American crime drama created by Courtney A. Kemp and produced by Curtis 50 Cent Jackson. The series aired on Starz from June 7, 2014, to February 9, 2020, spanning six seasons and 63 episodes",
      posterURL:
        "https://ntvb.tmsimg.com/assets/p10426936_b_h8_an.jpg?h=540&w=960",
      rating: 5,
    },
    {
      title: "Snowfall",
      description:
        "Snowfall is an American crime drama created by John Singleton, Eric Amadio, and Dave Andron. The show premiered on FX in 2017 and explores the early days of the crack cocaine epidemic in Los Angeles during the 1980s.",
      posterURL:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRdjNVe7WBAfyGxqlnSQ4LeSYdGCX6qK99Bb9gmzOzygPgGHg3uP1MOoaZ5hpIJyEKC7rqM5gRLqEEKF6yptrduASYmfuOpNEy3-qoat2A",
      rating: 4,
    },

    {
      title: "Top Boy",
      description:
        "Top Boy is a British crime drama series created by Ronan Bennett. Originally airing from 2011 to 2013, it was revived by Netflix in 2019 with new seasons. The show is set in East London and others to watch out.",
      posterURL:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcREtPTVKrfkO3CqGVAg0Lp9vYwuBCARCPxgPYBQ_yWHl549StkDwYoUj1AK3V8v9AneQYRRSuHylAy5UaqTNwHxYNdBwrX1IGrCdur9bw",
      rating: 4,
    },

    {
      title: "Game of Thrones",
      description:
        "Game of Thrones is a fantasy drama series based on George R.R. Martin’s A Song of Ice and Fire novels. Created by David Benioff and D.B. Weiss, it aired on HBO from 2011 to 2019, spanning eight epic seasons.",
      posterURL:
        "https://upload.wikimedia.org/wikipedia/en/d/d8/Game_of_Thrones_title_card.jpg",
      rating: 5,
    },
    {
      title: "Alchemy of souls",
      description:
        "Alchemy of Souls is a South Korean fantasy drama series created by the renowned writer Kim Young-hyun. It premiered on Netflix in 2022 and quickly gained popularity for its unique blend of fantasy, romance, and action.",
      posterURL:
        "https://asianwiki.com/images/2/2b/Alchemy_of_Souls_2-mp1.jpeg",
      rating: 4,
    },
  ]);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  return (
    <div className="movie">
      <h2>SceneStream</h2>
      <p className="note">Series to watch in 2023....</p>
     <div className="create">
         <div className="search1">
        <h4>Search movies by title or rating:</h4>
        <Filter
        setTitleFilter={setTitleFilter}
        setRatingFilter={setRatingFilter}
      />
      </div>
      <div className="add">
        <h5>Add new movies</h5>
        <Newmovies onAdd = {handleAddMovie} />
      </div>
     </div>
      <MovieList movies={filteredMovies} />;
    </div>
  );
}
export default App;