import Button from './Button.jsx'
import Input from './Input.jsx'

const DemoPage = () => {
  return (
    <section className='demoPage'>
      <Button />
      <Input id='user' label='Username' placeholder='@user_30' color='purple' size='lg' startIcon='person-fill' />
      <Button value='Login' color='primary' size='sm' />
      <Input id='desc' label='Description' helperText='Brief Description' color='blue' placeholder='Description' multiline />
      <Button value='Delete' iconStart='trash-fill' color='danger' size='lg' />
      <Input label='Email' value='example@mail.com' color='green' endIcon='envelope-fill' disabled />
      <Button value='Next' size='md' color='secondary' disableShadow />
      <Input id='hu' type='password' label='Password' placeholder='New password' color='purple' size='sm' />
      <Button value='Continue' iconEnd='arrow-right' color='primary' disabled />
      <Input id='ilgjk' type='phone' placeholder='(+00) 0000 0000' color='pink' label='Phone' />
      <Input />
    </section>
  )
}
export default DemoPage
