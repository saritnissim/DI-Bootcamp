import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const arr = ['aaa', 'bbb', 'ccc']
const element =<h1>Hello {arr[0]}</h1>
createRoot(document.getElementById('root')).render(<App />)
