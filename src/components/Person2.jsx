import React from 'react'

const Person2 = ({name, age, email}) => {
  return (
    <>
    <h2>Name - {name}</h2>
    <h2>Age - {age}</h2>
    {email && <h2>Email - {email}</h2>}
    </>
  )
}

export default Person2