import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TestApi from './Components/TestApi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TestApi /> {/* Comment this line to remove the api testing */}
    <App />
  </React.StrictMode>,
)
