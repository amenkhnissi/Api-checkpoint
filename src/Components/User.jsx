import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

const User = () => {
    
    const {id} = useParams() 
    const [user,SetUser] = useState([])

    const GetUser = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
        .then((res) =>  SetUser(res.data)  )
    }
    useEffect(()=> {
      GetUser()
    },[])

    return (
        <div className="user" >
            
                {user.map((user,key) => 
            <div key={key} >
                <span>Name    :     {user.name} </span>
                <span>Username:     {user.username} </span>
                <span>Phone   :     {user.phone} </span>
                <span>Website :  {user.website} </span>
                <span>Street  :     {user.address.street} </span>
                <span>Zipcode :     {user.address.zipcode} </span>
                <span>Company :     {user.company.name} </span>
             <Link to="/"  ><span style={{alignSelf:"flex-end",color:"wheat" }} >  Back</span></Link>   
            </div>

           
           

                  )}
            
        </div>
    )
}

export default User
