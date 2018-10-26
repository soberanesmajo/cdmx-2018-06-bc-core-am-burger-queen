import React, {Component} from 'react';
import Buttons from '../buttons/Buttons';
import './order.css';
import Navbar from '../navbar/Navbar';
import Input from '../input/Input';
import Card from '../card/Card';

class Order extends Component {
  constructor () {
    super();
    this.state = {
      data : ""
    }
  }

  inputCustomer = (customer) => { // callback function para comunicación entre hermanos
    this.setState({
      data : customer
    })
  }

  // toSave = (e, customer) => {
  //   if (e === true) {
  //     this.setState({
  //       data : customer
  //     })
  //   }
  // }

  render (){
    return (
      <div>
        <Navbar/>
        <div className="container">
        <Input callback={this.inputCustomer}/>
        <div className="row">
        <div className="col-6">
          <Buttons/>
        </div>
          <aside className="col-6">
            <Card data={this.state.data}/>
          </aside>
        </div>
        </div>
      </div>
    );
  }
};

export default Order;