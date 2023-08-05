import ReactDom from 'react-dom/client'
import { StrictMode } from 'react'
import './styles/globals.css'
import Button from './components/Button.jsx'

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <h1>Buttons</h1>
    <Button value='Click me!!' variant='OUtline' />
    <Button value='Click me!!' variant='DefauLt' />
    <Button value='Click me!!' variant='text' />
  </StrictMode>
)
