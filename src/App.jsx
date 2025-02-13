import React from 'react'
import Person from './components/Person'
import Superman from './components/Superman'
import Person3 from './components/Person3'
import Person2 from './components/Person2'
import Laptop from './components/Laptop'
import Events from './components/Events'
import Counter from './components/Counter'
import ShowProduct from './components/ShowProduct'
import FilterProduct from './components/FilterProduct'
import Fetch_Data_API from './components/Fetch_Data_API'
import DogPics from './components/DogPics'
import Form from './components/Form'
import Form2 from './components/Form2'
import BookAppointment from './components/BookAppointment'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Products from './pages/Products'

const App = () => {

    
  return (
    <>
    <div>
    {/* <Person name="Ashish" age={33} email="g@g.com" pincode={333}/>  
    <Person name="Neeraj" age={30} email="n@g.com" pincode={333}/>   */}
    </div>

    <div>
        {/* <Person2 name="Ram" age={33}/>
        <Person2 name="Shyam" age={23}/>
        <Person2 name="Ghanshyam" age={32} email="ram@gmail.com"/> */}
    </div>

    <div>
        {/* <Person3 name="Ram" age={33}/>
        <Person3 name="Shyam" age={23}/>
        <Person3 name="Ghanshyam" age={32}/> */}
    </div>

    <div>
        {/* <Laptop brandName="HP" model="ProBook" price={50000}/>
        <Laptop brandName="Dell" model="Inspiron" price={45000}/>
        <Laptop brandName="Lenovo" model="ThinkPad" price={57000}/> */}
    </div>

    <div>
      {/* <Events/> */}
    </div>

    <div>
      {/* <Counter/> */}
    </div>

    <div>
      {/* <ShowProduct /> */}
    </div>

    <div>
      {/* <FilterProduct/> */}
    </div>

    <div>
      {/* <Fetch_Data_API/> */}
    </div>

    <div>
      {/* <DogPics/> */}
    </div>

    <div>
      {/* <Form/> */}
    </div>

    <div>
      {/* <Form2/> */}
    </div>

    <div>
      {/* <BookAppointment/> */}
    </div>

    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/products' element={<Products/>} />
      </Routes>
    </Router>

    </>
  )
}

export default App