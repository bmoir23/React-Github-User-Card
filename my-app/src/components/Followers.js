import React, {Component} from "react";
import styled from "styled-components";

const Card = styled.div`
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


class Followers extends Component {
   constructor() {
     super();
     this.state = {
       follower: []
     };
   }
componentDidMount(){
   console.log('working')
   fetch("https://api.github.com/users/bmoir23/followers")
     .then(res => res.json())
     .then(res => this.setState({follower:res}))
     .catch(err => console.log('Error', err))
 }
 render(){
     return(
       <Card>
       <div className='friend-cards'>
         <h1> GitHub Friends</h1>
     {this.state.follower.map(friend => (
         <div key='follow'>
         <h2>{friend.login}</h2>
         <img src={friend.avatar_url}/>
         <h2>{friend.login}</h2>
         </div>
     ))}
     </div>
     </Card>
     );
 }
}
 export default Followers;
