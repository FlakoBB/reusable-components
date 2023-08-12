import Input from './Input.jsx'

const InputsSection = () => {
  return (
    <div>
      <h2>Inputs</h2>
      <div className='temporalContainer'>
        <Input id='gua' color='blue' />
        <Input id='dos' helperText='Helper Text' color='green' />
        <Input id='tres' startIcon='person-fill' color='pink' />
        <Input id='cuatro' endIcon='person-fill' color='purple' />
        <Input id='cinco' endIcon='arrow-right' value='My own description' multiline rows='6' />
      </div>
    </div>
  )
}

export default InputsSection
