import './Movie.css'

import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react'
import { useSelector } from "react-redux";

import tmdb from '../../axiosConfig/tmdb';

import Loading from '../../components/loading/Loading'
import Favourite from '../../components/favourite/Favourite'
import Rate from '../../components/rate/Rate'

import poster from "../../assets/images/poster.webp"
import poster_bg from "../../assets/images/poster-bg.webp"

const Movie = () => {
  const { id } = useParams();
  const numericId = Number(id);
  const [movie, setMovie] = useState({});
  const { vote_average, vote_count, title, overview, release_date, runtime, original_language} = movie;
  const movieFav = {id: numericId, vote_count, vote_average, title, release_date};
  
  const isLoading = useSelector((state) => state.app.isLoading);
  
  useEffect(() => {
    tmdb.get(`movie/${id}`).then((res) => {
      setMovie(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [id]);
  
  return (
    <div className='container movie'>
      <div>
        { isLoading ? <Loading /> :
        <div className='card'>
          <img className='cover' src={poster_bg} alt='poster' />
          <img className='poster' src={poster} alt='poster' />
          <div className='fav-rate'>
            <Rate vote_average={vote_average} vote_count={vote_count} />
            <Favourite movie={movieFav} />
          </div>
          <div className='name'>
            <h3>{title}</h3>
            <p className='muted'>{overview}</p>
          </div>
          <div className="details">
            <hr />
            <p>
              <span>Release</span>
              <span>{release_date ? new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(new Date(release_date)) : release_date}</span>
            </p>
            <p>
              <span>Duration</span>
              <span>{runtime ? `${Math.floor(runtime / 60 )}h ${runtime % 60 }m` : runtime}</span>
            </p>
            <p>
              <span>Language</span>
              <span>{original_language}</span>
            </p>
            <p>
              <span>Rating</span>
              <span>{vote_average ? `${vote_average.toFixed(1)} / 10` : vote_average}</span>
            </p>
            <p>
              <span>Reviews</span>
              <span>{vote_count ? `${vote_count} K` : vote_count}</span>
            </p>
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default Movie