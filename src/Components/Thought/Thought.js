import React from 'react';
import './Thought.css';

const Thought = (props) => {
  return(
    <div className="thought">
      <p>*{props.thought}</p>
    </div>
  );
}
export default Thought;
