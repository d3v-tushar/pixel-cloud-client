import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AuthProvider from './Context/AuthProvider'
import './index.css'
import { PhotoProvider } from 'react-photo-view';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <PhotoProvider>
      <App />
    </PhotoProvider>
    </AuthProvider>
  </React.StrictMode>
)
