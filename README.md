<h1 align="center">Reusable Components</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://reusable-components-flakobb.vercel.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/FlakoBB/reusable-components">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/ohgVTyJCbm5OZyTB2gNY">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

### Button Component
![screenshot](./public/screenshot1.png)

Page that shows a reusable component made with **React**. This component is a button with differents states that change his style.

The demo it is deployed on **Vercel**

### Built With

- [React](https://reactjs.org/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- Semantic HTML
- CSS

## Features

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/ohgVTyJCbm5OZyTB2gNY) was to build an application to complete the given user stories.

## How To Use

This React component require some props to render.

When you render the component without props obtains a default button.
```jsx
<Button />
```

To define a text to the button, we'll use the **value** prop.
```jsx
<Button value='Click me' />
```

The Button component has three sizes established to which we will have access from the **size** prop.
```jsx
<Button size='sm' />
<Button size='md' />
<Button size='lg' />
```

It also features three different styles accessible with the **variant** prop.
```jsx
<Button variant='default' />
<Button variant='outline' />
<Button variant='text' />
```

We can also choose between four different colors with the prop **color**.
```jsx
<Button color='default' />
<Button color='primary' />
<Button color='secondary' />
<Button color='danger' />
```

The default button has a box-shadow that we can disable using the **disableShadow** prop.
```jsx
<Button disablShadow />
```

We have the option of put an icon using the props **iconStart** and **iconEnd**. This props recibe a string that corresponding the icon's name provided by **Bootstrap Icons**.
```jsx
<Button iconStart='send-fill'/>
<Button iconEnd='send-fill'/>
```

Also we have access to the button attributes like type (default is 'button'), id, class, disabled and onClick from the props: **type**, **id**, **customClass**, **disabled** and **onClick**
```jsx
<Button type='submit' />
<Button id='btn_send' />
<Button customClass='btn_visit' />
<Button disabled />
<Button onClick={() => {}} />
```

## Contact

FlakoBB: [Follow me](https://bit.ly/follow-flako)
