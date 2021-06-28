import React from 'react';


export default class NavBar extends React.Component {
  render(){
    return(
        
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <ul className='nav nav-nav'>
            <li className='active nav-item'>
             <a className="nav-link active" href="#">Home</a>
              </li>
            <li className='nav-item'>
            <a className="nav-link" href="#">About</a> 
            </li>
            <li className='nav-item'>
            <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav> 
        
      
    );
  }
}