import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    // const [arr, setarr] = useState(0);
    // const [str, setstr] = useState("String");
    // const [Obj, setObj] = useState([
    //     {
    //         name:"Ram",
    //         age:33
    //     },
    //     {
    //         name:"Shyam",
    //         age: 32
    //     },
    //     {
    //         name:"Ghanshyam",
    //         age:31
    //     }
    // ]);
//     const [Obj, setObj] = useState([[
//         {
//             name:"Ram",
//             age:33
//         },
//         {
//             name:"Shyam",
//             age: 32
//         },
//         {
//             name:"Ghanshyam",
//             age:31
//         }
//     ],
//     [
//         {
//             name:"Sita",
//             age:29
//         },
//         {
//             name:"Radha",
//             age: 27
//         },
//         {
//             name:"Meera",
//             age:26
//         }
//     ]
// ]);
    useEffect(() => {
      document.title = counter;
    }, [counter])
    
    const increaseBy1 = () =>{
        // counter++;
        // setCounter(counter+1);
        setCounter(counter => counter+1);
    }
    const decreaseBy1 = () =>{
        // counter--;
        // setCounter(counter-1);
        setCounter(counter => counter-1);
    }
    // const male = () =>{
    //     setarr(0);
    // }
    // const female = () => {
    //     setarr(1);
    // }
  return (
    <div>
        {/* <h1>Name : {Obj[arr][counter % Obj[arr].length].name}</h1>
        <h2>Age : {Obj[arr][counter % Obj[arr].length].age}</h2> */}
        <h1>{counter}</h1>
        <button onClick={decreaseBy1}>-1</button>
        <button onClick={increaseBy1}>+1</button>
        {/* <button onClick={male}>Male</button>
        <button onClick={female}>Female</button> */}
    </div>
  )
}

export default Counter