import React from 'react';

const Menu = (props) => {
  //console.log(props); 
  return(
<div>
  {props.menu.map((element,i) => {
    return (
      <div key={i} className="container mt-3">
        <div>
          <button type="button" className="btn btn-primary btn-lg btn-style">{Object.keys(element)} : {Object.values(element)}</button>
        </div>
      </div>
    );
  })}
</div>    
  )
}
      
export default Menu;