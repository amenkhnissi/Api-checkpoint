import React from 'react'
import { Link } from 'react-router-dom'

const UserList = ({users}) => {
    return (
        <>
        <div  className="title"><h1>Users List</h1> </div>
        <div className="user-list">
            { users &&  users.map((user,key) => 
            <div key={key} className="user-card">
           <Link to={`/user/${user.id}/${user.name}`}   ><span style={{color:"blue"}} > {user.name} </span> </Link> 
            <span> {user.username} </span>
            <span> {user.email} </span>
        </div>  
            
            )}
            
            
        </div>
        </>
    )
}

export default UserList
