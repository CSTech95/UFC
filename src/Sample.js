import React from "react";

const Sample = props => {
  return (
    <div>
      <img src={props.pic} />
      <li>
        {props.fName} {props.lName}
      </li>
    </div>
  );
};
export default Sample;
