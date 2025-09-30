import "./Search.css";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import tmdb from "../../axiosConfig/tmdb";
import MovieCard from "../../components/movieCard/MovieCard";
import Loading from "../../components/loading/Loading";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Search() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = useQuery();
  const searchTerm = query.get("q");

  useEffect(() => {
    if (!searchTerm) return;

    setLoading(true);
    tmdb
      .get(`/search/movie?query=${searchTerm}`)
      .then((res) => {
        setResults(res.data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Search error:", err);
        setLoading(false);
      });
  }, [searchTerm]);

  return (
    <div className="container search-results">
      <h3>
        Results for: <span>{searchTerm}</span>
      </h3>

      {loading && <Loading />}

      {!loading && results.length === 0 && <p>No results found!</p>}

      <div className="movies">
        {results.map((movie) => (
          <div key={movie.id} className="movie-card">
            <MovieCard
              id={movie.id}
              vote_count={movie.vote_count}
              vote_average={movie.vote_average}
              title={movie.title}
              release_date={movie.release_date}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
