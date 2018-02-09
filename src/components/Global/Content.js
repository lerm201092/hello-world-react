// Dependencies
import React, { Component } from 'react';
// Assets
import './css/Content.css';
import logo2 from './pp.jpg';
class Content extends Component {


  render() {

    return (
      <div className="Content">
         
      <div className="card">
  <img src={logo2} alt="Avatar"/>
  <div className="container">
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div>
    
      </div>
    );
  }
}

export default Content;
