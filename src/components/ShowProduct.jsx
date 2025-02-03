import React, {useState} from 'react'

const ShowProduct = () => {
    let product = [
        {id:1, name:"Iphone", model:"16 pro", price:140000},
        {id:2, name:"Samsung", model:"Galaxy S25", price:155000},
        {id:3, name:"vivo", model:"Reno", price:40000},
        {id:4, name:"Oppo", model:"A44", price:30000},
    ]
    // const [item, setitem] = useState(0);

    // const next = () => {
    //     setitem(item => item + 1)
    // }
    // const prev = () => {
    //     setitem(item => item - 1)
    // }
  return (
    <div>
        {/* <h1>{product[item % product.length].id}</h1>
        <h1>{product[item % product.length].name}</h1>
        <h1>{product[item % product.length].model}</h1>
        <h1>{product[item % product.length].price}</h1>

        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button> */}

        {product.map((data) => (
            <div key={data.id}>
                <h1>{data.name}</h1>
                <h2>{data.model}</h2>
                <h2>{data.price}</h2>
            </div>
        ))}
    </div>
  )
}

export default ShowProduct