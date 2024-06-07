
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { InitDataProvider } from './context/InitDataContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <InitDataProvider>
      <App />
    </InitDataProvider>
    </BrowserRouter>,
)
