import "./Home.css";

import { useEffect, useState } from "react";

import MovieCard from "../../components/movieCard/MovieCard";
import tmdb from "../../axiosConfig/tmdb";
import Pagination from "../../components/pagination/Pagination";
import Loading from "../../components/loading/Loading";

import { useSelector } from "react-redux";

const HOME_PAGE_KEY = "homePage";

function Home() {
  const [movies, setMovies] = useState([]);
  const [moviesNumber, setMoviesNumber] = useState(10000);
  const [totalPages, setTotalPages] = useState(500);
  const [page, setPage] = useState(() => {
    // restore last page from sessionStorage if available
    const saved = sessionStorage.getItem(HOME_PAGE_KEY);
    return saved ? parseInt(saved, 10) : 1;
  });

  const isLoading = useSelector((state) => state.app.isLoading);

  const scrollToMovies = () => {
    const targetSection = document.getElementById("movies");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    sessionStorage.setItem(HOME_PAGE_KEY, page);
  }, [page]);

  useEffect(() => {
    tmdb
      .get(`movie/popular?page=${page}`)
      .then((res) => {
        setMovies(res.data.results);
        // setTotalPages(res.data.total_pages);
        setTotalPages(500);
        // setMoviesNumber(res.data.total_results);
        setMoviesNumber(10000);

        //scrollToMovies();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <div className="container home-container">
      <div className="header">
        <h1>Movie Magic</h1>
        <h2>Discover the magic of cinema from your screen . . .</h2>
        <p>
          Enjoy with <span>{`${moviesNumber / 1000} K`}</span> movies!
        </p>
        <button type="button" className="btn-sec" onClick={scrollToMovies}>
          Discover <span>&#8623;</span>
        </button>
      </div>

      <Pagination
        current={page}
        allPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
      />

      <div id="movies" className="movies">
        {isLoading && <Loading />}
        {movies.map((movie) => {
          const { id, vote_count, vote_average, title, release_date } = movie;
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
        })}
      </div>
    </div>
  );
}

export default Home;
