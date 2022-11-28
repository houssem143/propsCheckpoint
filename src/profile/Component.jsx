import React from 'react'
import propTypes from 'prop-types';
const Component = ({name,bio,job,children,handleName}) => {
  return (
    <div>
        <button onClick={() => handleName(name)} >click me</button>
        <p style={{color:'blue'},{backgroundColor:'grey'}} >My name is {name} and {bio}.I am a web {job}. </p>
        {children}
    </div>
  )
}
Component.defaultProps = {
name: 'Enter full name',
bio: 'Enter biography',
job : 'Enter your profession',
}
Component.propTypes={
    name: propTypes.string,
    bio: propTypes.string,
    job: propTypes.string,


}

export default Component