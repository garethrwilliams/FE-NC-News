import { createContext } from 'react';
import { useState, useEffect } from 'react';
import { getUsers } from '../utils/api';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState();
  const [user, setUser] = useState('cooljmessy');
  console.log('users:', users);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, [setUsers]);

  return (
    <UserContext.Provider value={{ user, setUser, users }}>
      {props.children}
    </UserContext.Provider>
  );
};
