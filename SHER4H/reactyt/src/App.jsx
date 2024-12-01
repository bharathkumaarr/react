import React from 'react';
import { useState } from 'react';

const App = () => {
  const [username, setUsername] = useState('')

  return (
    <div>
      <form >
        <input 
        value={username}
          onChange={(e)=>{
          setUsername(e.target.value)
          }}
          type="text" 
          placeholder="Enter name" 
          className="bg-slate-600 text-8xl px-4 py-3 rounded-3xl font-semibold" 
        />
        <button 
          type="submit" 
          className="px-4 py-3 bg-slate-500 rounded-3xl text-8xl m-5"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default App;
