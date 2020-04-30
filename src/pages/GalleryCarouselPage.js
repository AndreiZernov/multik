import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useHistory, useRouteMatch } from 'react-router-dom'
import InfoPage from './InfoPage'


const GalleryCarouselPage = ({data}) => {
  const history = useHistory()
  let { url } = useRouteMatch()
  const [ index, setIndex ] = useState(+url.split('/')[2].split('-')[2] || 0)
  const handleSelect = (selected) => { setIndex(selected) }

  return (
    <>
      {url.split('/')[2].split('-')[1] === 'info' ?
        <InfoPage />
      :
      <div className='page'>
          <Carousel activeIndex={index} onSelect={handleSelect} className="mt-5 pt-3">
            {data.map((image, i) =>
              <Carousel.Item key={i}>
                <div className="d-block gallery-img" style={{backgroundImage: `url(${image})`}} alt="portrait" />
              </Carousel.Item>
            )}
          </Carousel>
          <img className='btn-back' src={require("../assets/photos.png")} onClick={() => history.goBack()} alt="Go back" />
        </div>


      }
    </>
  )
}


export default GalleryCarouselPage
