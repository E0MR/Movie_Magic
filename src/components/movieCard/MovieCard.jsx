import './MovieCard.css'

import { Link } from 'react-router-dom'

import poster from "../../assets/images/poster.webp"

import Favourite from '../../components/favourite/Favourite'
import Rate from '../../components/rate/Rate'

function MovieCard({ id, vote_count, vote_average, title, release_date }) {
  const movieFav = {id, vote_count, vote_average, title, release_date};
  return (
    <>
      <div className='fav-rate'>
        <Rate vote_average={vote_average} vote_count={vote_count} />
        <Favourite movie={movieFav} />
      </div>
      <img src={poster} alt='poster' />
      <div className='movie-title'>
        <h3>{title}</h3>
      </div>
      <p className='muted'>{release_date ? new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit', year: 'numeric' }).format(new Date(release_date)) : release_date}</p>
      <Link to={`/movie/${id}`}>Details</Link>
    </>
  )
}

export default MovieCard