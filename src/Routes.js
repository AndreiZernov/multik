import React, { useEffect } from 'react'
import { Switch, Route} from 'react-router-dom'

import MainPage from './pages/MainPage'
import GalleryPage from './pages/GalleryPage'
import AboutPage from './pages/AboutPage'


const Routes = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route path='/portrait' component={GalleryPage} />
      <Route path='/conceptual' component={GalleryPage} />
      <Route path='/still_life' component={GalleryPage} />
      <Route path='/candid' component={GalleryPage} />
      <Route path='/urban' component={GalleryPage} />
      <Route path='/video' component={GalleryPage} />
      <Route exact path='/about' component={AboutPage} />

      {/* <Route component={NotFoundPage} /> */}
    </Switch>
  )
}




export default Routes
