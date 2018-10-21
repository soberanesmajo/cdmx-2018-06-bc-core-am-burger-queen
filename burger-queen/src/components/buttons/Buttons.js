import React from 'react';
import './buttons.css';

const Buttons = () => 
  <div className="container">
    <div className="row">
      <div className="col-md-12 div-btn">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Nombre del cliente" aria-label="Nombre del cliente" aria-describedby="button-addon2"/>
          <div className="input-group-append">
            <button className="btn btn-secondary btn-sm" type="button" id="button-addon2">Guardar</button>
          </div>
        </div>
        <button type="button" className="btn btn btn-outline-primary btn-lg">Desayuno</button>
        <button type="button" className="btn btn-outline-primary btn-lg">Comida</button>
      </div>
    </div>
  </div>

export default Buttons;