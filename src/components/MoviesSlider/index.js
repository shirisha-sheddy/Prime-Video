// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const setting = {
    dots: false,
    sliderToScroll: 1,
    sliderToShow: 4,
  }

  const {moviesList} = props

  return (
    <>
      <Slider {...setting}>
        {moviesList.map(each => (
          <MovieItem key={each.id} movieDetails={each} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
