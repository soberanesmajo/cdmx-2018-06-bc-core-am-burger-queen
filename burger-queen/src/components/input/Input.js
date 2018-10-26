import React, {Component}from 'react';
import Card from '../card/Card';

class Input extends Component {
  constructor () {
    super();
    this.state = {
      costumer: null
    }
  }

  handleChange = (e) => {
    this.setState({costumer: e.target.value});
  }

  saveCostumer = (e) => {
    
  }

  render () {
    return (
    <div className="input-group mb-3 mt-3">
      <input type="text" className="form-control" name="costumer" onChange={this.handleChange} placeholder="Nombre del cliente" aria-label="Nombre del cliente" aria-describedby="button-addon2"/>
      <div className="input-group-append">
        <button className="btn btn-secondary btn-sm" type="button" onClick={this.saveCostumer} id="button-addon2">Guardar</button>
      </div>
    </div>
    )
  }
}


export default Input;