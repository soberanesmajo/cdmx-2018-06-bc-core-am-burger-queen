import React, {Component } from 'react';
import { Redirect } from 'react-router-dom';
import firebase from '../../firebase/Firebase';
import './login.css';

class Login extends Component {
  constructor (props) {
    super (props);
    this.state = {
      email: '',
      password: '',
      user: null
    }
  }
  
  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value});
  }

  login = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
      console.log(user);
      this.setState ({user});
    })
    .catch((error) => {
      console.log(error);
    })
  }

  componentDidMount(){
    document.body.style.backgroundImage = 'url(../../assets/hamburger-576419_1280.png) no-repeat center -120%';      
    document.body.style.backgroundColor = '#FD907B'; // Set the style
  }
  
  // componentWillMount(){
  // }


//   componentWillUnmount(){
//     document.body.style.backgroundImage = 'url(../../assets/hamburger-576419_1280.png) no-repeat center -120%';    
// }

  render () {
    if (this.state.user) {
      return (
        <Redirect to = '/order' />
      )
    } else {
      return ( 
      <div className="body-login">
        <header className="container title">
          <h1>Burger Queen</h1>
        </header>
        <form className ="container form-login">
          <div className="form-group">
            <input type="email" className="form-control" name="email" onChange={this.handleChange} aria-describedby="emailHelp" placeholder="Email"/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" name="password" onChange={this.handleChange} placeholder="Password"/>
          </div>
          <button type="submit" onClick={this.login} className="btn btn-primary">Iniciar sesión</button>
        </form>
      </div>  
      )
    }
  }
}

export default Login;