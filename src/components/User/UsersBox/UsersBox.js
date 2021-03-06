import React, { useState } from 'react';
import './UsersBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons'
// import React, { useState } from 'react';
const UsersBox = (props) => {
    console.log(props);
    const {name, photo, city, salary, phone, email} = props.user;
    // const mobile = props.user.phone;
    const [mobile, setMobile] = useState();
    const showPhone =()=>{
       return setMobile(phone);
    }
    // const handleAddUser = () => {
    //     console.log('user added')
    // }
    return (
        <div className= "user-box">
            <div className="box1">
                <img style ={{width: '100px', borderRadius:'50%'}} src={photo} alt=""/>
            </div>
            <div className="box2">
                <h3 style={{color: "brown"}}>Name: {name}</h3>
                <p>City: {city}</p>
                <p>Phone: {mobile}</p>
                <p>E-mail: {email}</p>
                <p style={{color: "brown"}}>Salary: ${salary}</p>
                <button className="btn-class" onClick={showPhone}> Show phone</button>
                <button className="btn-class" onClick={()=>props.handleAddUser(props.user)}><FontAwesomeIcon icon={faUserPlus}/> Add users info</button>
            </div>
            
        </div>
    );
};

export default UsersBox;