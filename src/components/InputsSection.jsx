import Input from './Input.jsx'

const InputsSection = () => {
  return (
    <section className='container'>
      <h2 className='container__title'>Inputs</h2>
      <main>
        <article className='type_container'>
          <div className='rowContent'>
            <div>
              <h4 className='syntaxis'><code>&lt;Input /&gt;</code></h4>
              <Input />
            </div>
            <div>
              <h4 className='syntaxis'><code>&lt;Input helperText='Some interesting text' /&gt;</code></h4>
              <Input helperText='Some interesting text' />
            </div>
            <div>
              <h4 className='syntaxis'><code>&lt;Input disabled /&gt;</code></h4>
              <Input disabled />
            </div>
          </div>
        </article>
        <article className='type_container'>
          <div>
            <h4 className='syntaxis'><code>&lt;Input error /&gt;</code></h4>
            <Input error />
          </div>
        </article>
        <article className='type_container'>
          <h3 className='typeTitle'>Icons</h3>
          <div className='rowContent'>
            <div>
              <h4 className='syntaxis'><code>&lt;Input startIcon='person-fill' /&gt;</code></h4>
              <Input startIcon='person-fill' />
            </div>
            <div>
              <h4 className='syntaxis'><code>&lt;Input type='password' endIcon='lock-fill' /&gt;</code></h4>
              <Input type='password' endIcon='lock-fill' />
            </div>
          </div>
        </article>
        <article className='type_container'>
          <h3 className='typeTitle'>Colors</h3>
          <div className='rowContent'>
            <div>
              <h4 className='syntaxis'><code>&lt;Input color='blue' startIcon='person-fill' /&gt;</code></h4>
              <Input color='blue' startIcon='person-fill' />
            </div>
            <div>
              <h4 className='syntaxis'><code>&lt;Input color='green' helperText='Some interesting text' /&gt;</code></h4>
              <Input color='green' helperText='Some interesting text' />
            </div>
            <div>
              <h4 className='syntaxis'><code>&lt;Input color='pink' endIcon='lock-fill' disabled /&gt;</code></h4>
              <Input color='pink' endIcon='lock-fill' disabled />
            </div>
            <div>
              <h4 className='syntaxis'><code>&lt;Input color='purple' /&gt;</code></h4>
              <Input color='purple' />
            </div>
          </div>
        </article>
        <article className='type_container'>
          <h3 className='typeTitle'>Sizes</h3>
          <div className='rowContent'>
            <div>
              <h4 className='syntaxis'><code>&lt;Input size='sm' /&gt;</code></h4>
              <Input size='sm' />
            </div>
            <div>
              <h4 className='syntaxis'><code>&lt;Input size='md' /&gt;</code></h4>
              <Input size='md' />
            </div>
            <div>
              <h4 className='syntaxis'><code>&lt;Input size='lg' /&gt;</code></h4>
              <Input size='lg' />
            </div>
          </div>
          <h4 className='syntaxis'><code>&lt;Input size='fullWidth' /&gt;</code></h4>
          <Input size='fullWidth' />
        </article>
        <article className='type_container'>
          <h3 className='typeTitle'>Multiline</h3>
          <div className='rowContent'>
            <div>
              <h4 className='syntaxis'><code>&lt;Input multiline /&gt;</code></h4>
              <Input multiline />
            </div>
            <div>
              <h4 className='syntaxis'><code>&lt;Input multiline rows='10' /&gt;</code></h4>
              <Input multiline rows='10' />
            </div>
            <div>
              <h4 className='syntaxis'><code>&lt;Input multiline disabled /&gt;</code></h4>
              <Input multiline disabled />
            </div>
          </div>
        </article>
      </main>
    </section>
  )
}

export default InputsSection
