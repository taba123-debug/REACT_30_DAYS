import React from 'react'
// prop example  Type 01 =>string prop Type
const Header = (props) => {
  return (
    <div>
      <div className='header-wrapper'>
       <small>{props.welcome}</small>
       <h2>{props.name}</h2>
       <h2>{props.objective}</h2>
       <h2>{props.title}</h2>
       <h2>{props.date}</h2>
      </div>
      <div>
        <h1>Props using passing variables</h1>
        <h4>{props.user_Name}</h4>
        <p>
        {props.firstName}
        {props.lastName}
        </p>
      </div>
    </div>
  )
}

export default Header
