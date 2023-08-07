import Button from './components/Button.jsx'
import './styles/customStyles.css'

const App = () => {
  const sayHi = (name) => {
    console.log(`Hola !!! ${name}`)
  }

  return (
    <div className='column'>
      <h1>Buttons</h1>
      <Button value='Click me!!' variant='default' />
      <Button value='Click me!!' variant='default' disableShadow />
      <Button value='Click me!!' color='primary' />
      <Button value='Click me!!' color='primary' disableShadow />
      <Button value='Click me!!' color='secondary' />
      <Button value='Click me!!' color='secondary' disableShadow />
      <Button value='Click me!!' color='danger' />
      <Button value='Click me!!' color='danger' disableShadow />
      <Button value='Click me!!' variant='outline' />
      <Button value='Click me!!' variant='outline' color='primary' />
      <Button value='Click me!!' variant='outline' color='secondary' />
      <Button value='Click me!!' variant='outline' color='danger' />
      <Button value='Click me!!' variant='text' />
      <Button value='Click me!!' variant='text' color='primary' />
      <Button value='Click me!!' variant='text' color='secondary' />
      <Button value='Click me!!' variant='text' color='danger' />
      <Button value='Hola' variant='default' size='sm' />
      <Button value='Hola' variant='outline' size='md' />
      <Button value='Hola' variant='outline' size='lg' color='danger' />
      <Button value='Hola' variant='default' size='md' />
      <Button value='Hola 1' variant='default' size='lg' disableShadow onClick={() => sayHi('BTN 1')} />
      <Button value='Hola 2' variant='default' size='lg' disabled onClick={() => sayHi('BTN 2')} />
      <Button />
      <Button value='Custom' id='MyBTN' customClass='custom__btn' />
    </div>
  )
}
export default App
