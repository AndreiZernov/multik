import React from 'react'
import ReactDOM from 'react-dom'
import { DataItemsProvider } from './context/dataItems-context'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './css/app.css'


ReactDOM.render(
  <DataItemsProvider>
    <Router>
      <App />
    </Router>
  </DataItemsProvider>
  ,document.getElementById('root'));
