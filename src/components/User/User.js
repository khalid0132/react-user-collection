import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json';
import './User.css';
import UserCart from './UserCart/UserCart';
import UsersBox from './UsersBox/UsersBox';

const User = () => {
    
    // console.log(fakeData)
    const first15 = fakeData.slice(0 , 15);
    console.log(first15);
    const [users, setUsers]= useState(first15);
      
  
    const[userInfo, setUserInfo] = useState([]);
    const handleAddUser = (user) => {
        console.log('user added', user)
        const newUser = [...userInfo, user];
        setUserInfo(newUser);
        
    }
    return (
        
        
        <div className="users-container">
            <div className="users-info">
                <h3>Users Information</h3>
             
                    {
                        users.map((user) => <UsersBox 
                            user={user}
                            handleAddUser={handleAddUser}
                            ></UsersBox>)
                    }
               
            </div>
            <div className="users-update">
                <h3>Number of users: {users.length}</h3>
                <h3>Counted users: {userInfo.length}</h3>
                <h3><UserCart userInfo ={userInfo}></UserCart></h3>
                <button className= "btnStyle"> Review information</button>
            </div>
        </div>
    );
};

export default User;