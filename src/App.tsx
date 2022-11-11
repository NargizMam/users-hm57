import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";

function App() {
  return (
      <div>
        <header>
          <Navbar/>
        </header>
        <main className="container-fluid">
          <div className='row nt-2'>
            <div className='col m-2'>
                <UserForm/>
            </div>
            <div className='col m-2'>
                <Users/>
            </div>
          </div>
        </main>
      </div>
  );
}

export default App;
