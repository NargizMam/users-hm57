import React, {useState} from 'react';
import Navbar from "./components/Navbar/Navbar";
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import {User} from "./types.d";

function App() {
    const [users, setUsers] = useState<User[]>([]);

    const addUser = (newUser: User) => {
        setUsers(prev=> [...prev, newUser]);
    };

  return (
      <div>
        <header>
          <Navbar/>
        </header>
        <main className="container-fluid">
          <div className='row nt-2'>
            <div className='col m-2'>
                <UserForm onSubmit={addUser}/>
            </div>
            <div className='col m-2'>
                <Users users={users}/>
            </div>
          </div>
        </main>
      </div>
  );
}

export default App;
