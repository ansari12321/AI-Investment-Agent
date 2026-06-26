import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AnalysisProvider } from './context/AnalysisContext'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnalysisProvider>
      <App />
      <Toaster position="top-right" reverseOrder={false} />
    </AnalysisProvider>
  </React.StrictMode>,
)
