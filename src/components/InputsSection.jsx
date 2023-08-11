import Input from './Input.jsx'

const InputsSection = () => {
  return (
    <div>
      <h2>Inputs</h2>
      <div className='temporalContainer'>
        <Input id='gua' />
        <Input id='dos' helperText='Helper Text' />
        <Input id='tres' startIcon='person-fill' />
        <Input id='cuatro' endIcon='person-fill' />
        <Input id='cinco' endIcon='arrow-right' value='My own description' multiline rows='6' />
      </div>
    </div>
  )
}

export default InputsSection
