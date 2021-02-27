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

    // const salary = props.salary;
    // console.log(salary);
    // let totalSalary = 0;
    // for (let i = 0; i < salary.length; i++) {
    //     const unit = salary[i];
    //     totalSalary = totalSalary + unit;
    // }

  return (
    <div>
      <h4>Users total salary: ${totalSalary}</h4>
    </div>
  );
};

export default UserCart;
