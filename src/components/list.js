import React from "react";

/* Props in this component 
- class
- title
- subtitle
- listItem1
- listItem2 (Conditional)
*/

const List = (props) => {
  return (
    <div className={props.class}>
      <h4>{props.title}</h4>
      <p>{props.subtitle}</p>
      <li>{props.listItem1}</li>
      {props.listItem2 ? <li>{props.listItem2}</li> : null}
    </div>
  );
};
export default List;
