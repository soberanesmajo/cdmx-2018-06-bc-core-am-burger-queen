import React, {Component} from 'react';
import './card.css';

class Card extends Component {
  // console.log(props.data)
  render () {
      return (
      <div className="card bg-light mb-3 p-3">
      <div className="card-header"> Cliente: {this.props.data} </div>
      <div className="card-body">
        <h6 className="card-title">Total:</h6>
        <button type="button" className="btn btn-primary">Enviar a cocina</button>
      </div>
      </div>
      )
    }
}

export default Card;