import ButtonsSection from './components/ButtonsSection.jsx'

const App = () => {
  return (
    <>
      <header className='mainHeader'>
        <h1 className='title'>Reusable Components</h1>
        <nav className='navigator'>
          <span className='navigator__link navigator__link--btns'>Buttons</span>
          <span className='navigator__link navigator__link--inputs'>Inputs</span>
        </nav>
      </header>
      <ButtonsSection />
      <footer>
        <p>Created by <a href='https://bit.ly/follow-flako' target='_blank' rel='noreferrer'>FlakoBB</a> - devChallenches.io</p>
      </footer>
    </>
  )
}
export default App
