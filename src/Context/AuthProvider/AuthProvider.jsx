import React,{useState,createContext} from 'react';
import { useContext } from 'react';

const authContex = createContext();

export function AuthProvider({children}) {
 const [user,setUser] = useState(null);
//  const [user,setUser] = useState({userName: "bob",userId: 10,password: 123});

 function login(user){
    setUser(user)
 }

 function logout(){
    setUser(null);
 }

  return (
    <authContex.Provider value={{user,login,logout}}>
       {children}
    </authContex.Provider>
  )
}

export const useAuth = () => {

 return  useContext(authContex) 
}