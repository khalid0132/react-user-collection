import logo from "./logo.svg";
import "./App.css";
import User from "./components/User/User";

// import { useEffect, useState } from 'react';
// import fakeData from './fakeData/fakeData.json'
function App() {
  // const [users, setUsers] = useState([]);
  // useEffect(()=>{
  //   setUsers(fakeData);
  //   // console.log(fakeData)
  // });
  return (
    <div className="App">
      <User></User>

      {/* <div className="user-info">
      <h2>User Information: {users.length}</h2>
      <h3></h3>
    </div>
    <div>
      <h4>Counted users:</h4>
      <h4>Total users salary:</h4>
    </div> */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
