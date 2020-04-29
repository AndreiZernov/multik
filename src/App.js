import React from 'react'
import { withRouter } from 'react-router-dom'
import { useDataItems } from "./context/dataItems-context"

import Routes from './Routes'
import Header from './components/Header'
import LoadingPage from './pages/LoadingPage'


const App = () => {
  const { loading } = useDataItems()
  return (
    <>
      {
        loading ?
          <LoadingPage /> :
          <>
            <Header />
            <Routes />
          </>
      }
    </>
  )
}


export default withRouter(App)
