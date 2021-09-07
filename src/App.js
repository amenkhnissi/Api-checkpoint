import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserList from './Components/UserList';
import { BrowserRouter ,Route } from 'react-router-dom';
import User from './Components/User';

function App() {

  const [usersList,SetUsersList] = useState([])

  const GetUserList =  () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => SetUsersList(res.data) )
  }
     
   useEffect(() => {
     GetUserList()
    
   },[])

  return (
    <BrowserRouter>
     <Route exact path="/" >
     <UserList users={usersList}  />
     </Route>
     <Route exact path="/user/:id/:userName" >
     <User />
     </Route>
    
    </BrowserRouter>
    
  );
}

export default App;
