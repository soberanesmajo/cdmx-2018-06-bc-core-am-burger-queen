import React from 'react';
import Buttons from '../buttons/Buttons';
import './order.css';
import Navbar from '../navbar/Navbar';
import Input from '../input/Input';
import Card from '../card/Card';


const Order = () => {
  return (
    <div>
      <Navbar/>
      <div className="container">
      <Input/>
      <div className="row">
      <div className="col-6">
        <Buttons/>
      </div>
        <aside className="col-6">
          <Card/>
        </aside>
      </div>
      </div>
    </div>
  );
};

export default Order;