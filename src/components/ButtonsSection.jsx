import Button from './Button.jsx'

const ButtonsSection = () => {
  return (
    <section className='container'>
      <h2 className='container__title'>Buttons</h2>
      <main>
        <article className='type_container'>
          <h4 className='syntaxis'><code>&lt;Button /&gt;</code></h4>
          <Button />
        </article>
        <article className='type_container'>
          <h3 className='typeTitle'>Sizes</h3>
          <div className='rowContent'>
            <div>
              <h4 className='syntaxis'><code>&lt;Button size='sm' /&gt;</code></h4>
              <Button size='sm' />
            </div>
            <div>
              <h4 className='syntaxis'><code>&lt;Button size='md' /&gt;</code></h4>
              <Button size='md' />
            </div>
            <div>
              <h4 className='syntaxis'><code>&lt;Button size='lg' /&gt;</code></h4>
              <Button size='lg' />
            </div>
          </div>
        </article>
        <article className='type_container'>
          <h3 className='typeTitle'>Colors</h3>
          <div className='rowContent'>
            <div>
              <h4 className='syntaxis'><code>&lt;Button color='primary' /&gt;</code></h4>
              <Button color='primary' />
            </div>
            <div>
              <h4 className='syntaxis'><code>&lt;Button color='secondary' /&gt;</code></h4>
              <Button color='secondary' />
            </div>
            <div>
              <h4 className='syntaxis'><code>&lt;Button color='danger' /&gt;</code></h4>
              <Button color='danger' />
            </div>
          </div>
        </article>
        <article className='type_container'>
          <h3 className='typeTitle'>Variants</h3>
          <div className='rowContent'>
            <div>
              <h4 className='syntaxis'><code>&lt;Button value='Click me!' variant='outline' /&gt;</code></h4>
              <Button value='Click me!' variant='outline' />
            </div>
            <div>
              <h4 className='syntaxis'><code>&lt;Button value='Click me!' variant='text' /&gt;</code></h4>
              <Button value='Click me!' variant='text' />
            </div>
            <div>
              <h4 className='syntaxis'><code>&lt;Button value='Click me!' variant='default' /&gt;</code></h4>
              <Button value='Click me!' variant='default' />
            </div>
          </div>
        </article>
        <article className='type_container'>
          <h4 className='syntaxis'><code>&lt;Button disableShadow /&gt;</code></h4>
          <Button disableShadow />
        </article>
        <article className='type_container'>
          <h4 className='syntaxis'><code>&lt;Button disabled /&gt;</code></h4>
          <Button disabled />
        </article>
        <article className='type_container'>
          <h3 className='typeTitle'>Icons</h3>
          <div className='rowContent'>
            <div>
              <h4 className='syntaxis'><code>&lt;Button iconStart='send-fill' /&gt;</code></h4>
              <Button iconStart='send-fill' />
            </div>
            <div>
              <h4 className='syntaxis'><code>&lt;Button iconEnd='send-fill' /&gt;</code></h4>
              <Button iconEnd='send-fill' />
            </div>
          </div>
        </article>
        <article className='type_container'>
          <h3 className='typeTitle'>Custom Styles</h3>
          <h4 className='syntaxis'><code>&lt;Button value='Custom' customClass='custom__btn' /&gt;</code></h4>
          <Button value='Custom' customClass='custom__btn' />
        </article>
      </main>
    </section>
  )
}
export default ButtonsSection
