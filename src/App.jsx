import Button from './components/Button.jsx'

const App = () => {
  return (
    <div className='column'>
      <h1>Buttons</h1>
      <Button value='Click' variant='outline' />
      <Button value='Click me!!' variant='default' />
      <Button value='Click me!! Soy un boton com musho texto que pedo' variant='text' />
      <Button value='Sin Sombra' disableShadow />
      <Button value='Primary Color' color='primary' variant='default' disableShadow />
    </div>
  )
}
export default App
