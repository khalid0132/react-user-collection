import React from "react";

const UserCart = (props) => {
    console.log(props)
    const userInfo = props.userInfo;
    console.log(userInfo)

    let totalSalary = 0;
    for (let i = 0; i < userInfo.length; i++) {
        const unit = userInfo[i];
        totalSalary = totalSalary + unit.salary;
    }
    
    //Reduce used instead of For loop
  // const totalSalary = userInfo.reduce( (totalSalary, unit) => totalSalary + unit.salary,0);


  return (
    <div>{
       userInfo.map((select => <p>Name:{select.name}</p>))
      }
      <h4>Users total salary: ${totalSalary}</h4>
    </div>
  );
};

export default UserCart;
