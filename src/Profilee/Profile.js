import React from 'react';
import PropTypes from 'prop-types';

export default function Profile( props) {
  return (<div style= {{textAlign: "center"}}>
    <div>{props.fullName}</div>
    <h1>{props.bio}</h1>
    <p>{props.profession}</p>
    {props.children}
    <button style={{background: "red", height: "40px", width: "200px", display: "flex"}} onClick={()=>props.handlename(`${props.fullName}`)} >hello </button>
    </div>
  )
}
Profile.defaultProps = {
  profession: "entry level web developer",
  onClick: (()=>{alert(`${this.props.fullName}`)}),
};

Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  onClick: PropTypes.func,
};