import React, {Component} from 'react';
import './buttons.css';
import Data from '../data/Menu.json';
import Menu from '../menu/Menu';

class Buttons extends Component {
  constructor (props) {
    super (props);
    this.state = {
      menu : []
    }
  }
  
  breakfast = () => {
    const breakfastMenu = [];
    // console.log(breakfastMenu);
    const bm = Data.desayuno;
    for(const x in bm) {
      const price = bm[x];
        const newObj = {
        [x] : price
      }
      breakfastMenu.push(newObj);
    }
    this.setState({menu : breakfastMenu});
  }
  
  meal = () => {
    const mealMenu = [];
    // console.log(mealMenu);
    const mealMN = Data.comida;
    for (const x in mealMN){
      const priceMeal = mealMN[x];
      const newObjectMeal = {
        [x] : priceMeal
      }
      mealMenu.push(newObjectMeal);
    }
    this.setState({menu : mealMenu})
  }

  render () {
    return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 div-btn">
          <button type="button" onClick={this.breakfast} name="desayuno" className="btn btn btn-outline-primary btn-lg">Desayuno</button>
          <button type="button" onClick={this.meal} name="comida" className="btn btn-outline-primary btn-lg">Comida</button>
          <Menu menu={this.state.menu}/>
        </div>
      </div>
    </div>
    )
  }
}




export default Buttons;