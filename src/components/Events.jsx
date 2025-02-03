import React from 'react'

const Events = () => {
    const handleClick = () => {
        alert('Button Clicked');
    }
    const handleHover = () => {
        alert('mouse hovered on button')
    }
    const addition = (a) => {
        alert(a + 10);
    }
  return (
    <>
    <h3>We are learning Events</h3>
    <button onClick={handleClick} >Click me</button>
    <button onClick={() => addition(20)} >Click add</button>
    </>
  )
}

export default Events