import './Home.css'

import {useEffect, useState} from 'react'

import tmdb from '../../axiosConfig/tmdb';


function Home() {
  const [movies, setMovies] = useState([]);

  const scrollToMovies = () => {
    const targetSection = document.getElementById('movies');
    if (targetSection) {
      targetSection.scrollIntoView();
    }
  }
  
  useEffect(() => {
    tmdb.get('movie/popular').then((res) => {
      setMovies(res.data.results);
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  
  return (
    <div className='container home-container'>
      <div className='header'>
        <h1>
          🎬
          <br />
          Movie Magic
        </h1>
        <h2>Discover the magic of cinema from your screen . . .</h2>
        <button onClick={scrollToMovies}>Discover <span>&#8623;</span></button>
      </div>
      <div id='movies' className="movies">
        {movies.map((movie) => {
          return <div key={movie.id}>{movie.title}</div>
        })}
      </div>
    </div>
  )
}

export default Home
