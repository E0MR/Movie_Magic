import './Rate.css'

function Rate({ vote_average, vote_count }) {
  return (
    <div 
      data-vote={`Vote\nAverage: ${vote_average ? vote_average.toFixed(1) : vote_average} / 10\nCount: ${vote_count} K`} 
      data-rate={(vote_average*10).toFixed(0)+'%'}
      style={{
        '--percentage': `${vote_average * 10}%`,
        '--gradient-color': `${(vote_average * 10) < 50 ? '#FF4C4C' : (vote_average * 10) < 75 ? '#FFD93D' : '#4CAF50'}`,
      }}
      className='rate'></div>
    )
}

export default Rate