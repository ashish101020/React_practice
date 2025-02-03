import React from 'react'

const Person = ({name, age, email, pincode}) => {


  return (
    <>
    <div>
        <h1>Name - {name}</h1>
        <h1>age - {age}</h1>
        <h1>email - {email}</h1>
        <h1>pincode - {pincode}</h1>
    </div>
    
    </>
  )
}
// const Person = (props) => {

//     // const Person = {
//     //     name: "Ashish Gupta",
//     //     age: 22,
//     //     email: "gupta@mail.com",
//     //     pincode: 234311
//     // }

//   return (
//     <>
//     <div>
//         <h1>Name - {props.name}</h1>
//         <h1>age - {props.age}</h1>
//         <h1>email - {props.email}</h1>
//         <h1>pincode - {props.pincode}</h1>
//     </div>
    
//     </>
//   )
// }

export default Person