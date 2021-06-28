import React from 'react';


export default class LoginForm extends React.Component{
  render(){
    return(
      
      <form class='loginform'>
        <h3>Login Below</h3>
        <div class="form-group">  
          <input type ="text" class ='form-text' id ='username' placeholder='User Name'></input>
        </div>
        <div class='form-group'>
          <input type ="password" class ='form-text' id ='password' placeholder='Password'></input>
        </div>
        <button type ='submit' class ='btn btn-info'>Submit</button>
      </form>
      
    );
  }
}