import Button from './Button.jsx'

const ButtonsSection = () => {
  const sayHi = (name) => {
    console.log(`Hola !!! ${name}`)
  }

  return (
    <section className='column'>
      <h2>Buttons</h2>
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
      <Button value='Icon Start' variant='outline' color='danger' iconStart='sign-turn-left' />
      <Button value='Icon End' variant='outline' color='danger' iconEnd='send-fill' />
      <Button value='Botón con mucho texto para ver como se comporta el tamaño de un boton con mucho texto xD' size='sm' />
      <Button value='Botón con mucho texto para ver como se comporta el tamaño de un boton con mucho texto xD' size='md' />
      <Button value='Botón con mucho texto para ver como se comporta el tamaño de un boton con mucho texto xD' size='lg' />
      <Button value='sm' size='sm' />
      <Button value='md' size='md' />
      <Button value='lg' size='lg' />
    </section>
  )
}
export default ButtonsSection
