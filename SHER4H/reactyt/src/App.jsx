import React from 'react'
const a = 20
const App = () => {
  let user = 'Bharath Kumar'
  
  const text = () => {
    console.log('text when clicked');
  }
   
  const changeUser = () => {
    console.log(user);
     
    user='new user bharath 2';
    console.log(user);
  }
  return (
    <div>
      <h1>Username is {user}</h1>
      <button onClick={changeUser}>Change User</button>

  
    </div>
  )
}

export default App
