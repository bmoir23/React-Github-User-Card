import React, { Component } from "react";
import './App.css';
import Followers from './components/Followers.js';
import styled from "styled-components";

const User = styled.div`
width: 50%%;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 5px;
box-shadow: 0 1px 6px -2px #000;
background-color: #FFF;
margin-bottom: 30px;
`

class App extends Component {
 constructor() {
   super();
   this.state = {
     user: [{}]
   };
 }
 componentDidMount(){
   fetch("https://api.github.com/users/bmoir23")
     .then(res => res.json())
     //.then(res => console.log(res) )
     .then(res => this.setState({user:res}))
     .catch(err => console.log('Error', err))
 }
 render() {
   return(
     <User>
   <div className='profile'>
     <h2>{this.state.user.name}</h2>
     <img src={this.state.user.avatar_url} />
     <h2>Followers: {this.state.user.followers}</h2>
     <h2>Following: {this.state.user.following}</h2>
       <Followers  />
     </div>
     </User>
   );
   }
   }
export default App;
