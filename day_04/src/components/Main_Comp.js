import React from 'react'
// prop Type Number props Type
const Main_Comp = (props) => {
  return (
    <div>
      <h2>{props.Age}</h2>
      <h2>{props.CGPA}</h2>
      <h2>{props.mass}</h2>
    </div>
  )
}
const SubComponent = () => {
    return <p>This is a sub-component.</p>;
  };
  
  // Sub-component 2
  const AnotherSubComponent = () => {
    return <p>This is another sub-component.</p>;
  };

  const Boolean_type=()=>{
    
  }
export default Main_Comp
export { SubComponent, AnotherSubComponent };
