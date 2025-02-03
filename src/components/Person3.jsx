import React from 'react'

const Person3 = ({name, age}) => {
    
  return (
    <>
    <div>
        <h1>Name - {name}</h1>
        <h3>
            {(age > 25) ? <h1>You can Drive</h1> : <h1>Yo can not Drive</h1>}
        </h3>
    </div>

    </>
  )
}

export default Person3