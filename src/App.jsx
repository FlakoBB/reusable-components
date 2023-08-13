import ButtonsSection from './components/ButtonsSection.jsx'
import InputsSection from './components/InputsSection.jsx'
import DemoPage from './components/DemoPage.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <header className='mainHeader'>
          <h1 className='title'>Reusable Components</h1>
          <nav className='navigator'>
            <Link to='/buttons' className='navigator__link'>Buttons</Link>
            <Link to='/inputs' className='navigator__link'>Inputs</Link>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<DemoPage />} />
          <Route path='/buttons' element={<ButtonsSection />} />
          <Route path='/inputs' element={<InputsSection />} />
          <Route path='/*' element={<h2>Error 404 ¯\_(ツ)_/¯</h2>} />
        </Routes>
        <footer>
          <p>Created by <a href='https://bit.ly/follow-flako' target='_blank' rel='noreferrer'>FlakoBB</a> - devChallenges.io</p>
        </footer>
      </Router>
    </>
  )
}
export default App
