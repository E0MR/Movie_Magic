import "./Favorites.css";

import Loading from "../../components/loading/Loading";
import MovieCard from "../../components/movieCard/MovieCard";

import { useSelector } from "react-redux";

function Favorites() {
  const favourites = useSelector((state) => state.fav.favourites);

  const isLoading = useSelector((state) => state.app.isLoading);

  return (
    <div className="container fav-container">
      <h2>My Favourites</h2>
      <div>
        {isLoading && <Loading />}
        {favourites.length === 0 ? (
          <p>No favourites yet!</p>
        ) : (
          favourites.map((fav) => {
            const { id, vote_count, vote_average, title, release_date } = fav;
            return (
              <div key={id} className="movie-card">
                <MovieCard
                  id={id}
                  vote_count={vote_count}
                  vote_average={vote_average}
                  title={title}
                  release_date={release_date}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Favorites;
