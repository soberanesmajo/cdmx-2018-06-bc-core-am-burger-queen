import React, {Component}from 'react';
import PropTypes from 'prop-types';

class Input extends Component {

  handleChange = (e) => {
    this.props.callback(e.target.value);
  }
  
  // saveCustomer = (e, handleChange) => {
  //   this.props.callback(this.handleChange());
  // }

  render () {
    return (
    <div className="input-group mb-3 mt-3">
      <input type="text" className="form-control" name="costumer" onChange={this.handleChange} placeholder="Nombre del cliente" aria-label="Nombre del cliente" aria-describedby="button-addon2"/>
      <div className="input-group-append">
        <button className="btn btn-secondary btn-sm" type="button" onClick={this.saveCustomer} id="button-addon2">Guardar</button>
      </div>
    </div>
    )
  }
}

Input.protoTypes = {
  callback: PropTypes.func,
}


export default Input;