import React from 'react'
import './App.css';
import Header from './components/Header'
import Main_Comp from './components/Main_Comp';
import { SubComponent } from './components/Main_Comp';
import { AnotherSubComponent } from './components/Main_Comp';
// day 4  lesson props
// 1-Props=>injecting data as parameters to components
// Props used to pass data from one component to another from parent to child component
//  as in functions in Javascript and Components in React js
// 2-Diff types of props
// i)string data type =>Header!
// passing variables is more easy as more logic , we can use input also as prop
// ii)number data type
// iii)boolean data type


const App = () => {
  // passing varaible as props
  const user_Name='User 01'
  const firstName='Tabban'
  const lastName='Akbar Ghani'
  // passing variable as prop in number data type
  let Age=19
  let CGPA=3.78
  let mass=87
  return (
    <div>
      <h1>Tabban!</h1>
      <Header
       welcome="Hi this is React day-4"
       date='Jan 09 2024'
       title='30 Days learning'
       objective='React learning'
       name='Tabban'
       user_Name={user_Name}
       firstName={firstName}
       lastName={lastName}
       />
       <Main_Comp
       Age={Age}
       CGPA={CGPA}
       mass={mass}
       
       />
       <SubComponent/>
       <AnotherSubComponent/>
    </div>
  )
}

export default App
