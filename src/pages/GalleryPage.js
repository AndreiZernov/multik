import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useDataItems } from "../context/dataItems-context"
import { Link, Switch, Route } from 'react-router-dom'
import GalleryCarouselPage from './GalleryCarouselPage'


const GalleryPage = () => {
  const { smallPhotos, photos } = useDataItems()
  let { url, path } = useRouteMatch()
  let topic = url.substring(1)
  let data = smallPhotos[`small${topic.replace(topic[0], topic[0].toUpperCase())}`]
  let videoData = photos[topic]

  return (
    <>
      <Switch>
        <Route exact path={path}>
          <div className='gallery'>
            <p className='gallery-title'>{topic.toUpperCase().replace('_', ' ')}</p>
            {
              topic !== 'video' ?
                data.map((image, i) =>
                  <Link key={i} to={`${url}/${topic}-carousel-${i}`}>
                    <img src={image} alt='photos' />
                  </Link>
                )
              :
              videoData.map((link, i) =>
                <video key={i} muted controls width="auto" height="250"
                  onMouseOver={event => event.target.play()}
                  onMouseOut={event => event.target.pause()}>
                  <source poster={require('../assets/mltl_white.png')}
                    src={link} type="video/mp4" />
                  <source poster={require('../assets/mltl_white.png')}
                    src={link} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              )
            }
          </div>
        </Route>
        <Route path={`${path}/:topicId`}>
          <GalleryCarouselPage data={data}/>
        </Route>
      </Switch>
    </>
  )
}


export default GalleryPage
