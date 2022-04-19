import {createContext} from 'react';
import {useState} from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState('default');

  return (
    <UserContext.Provider value={{user, setUser}}>
      {props.children}
    </UserContext.Provider>
  );
};
