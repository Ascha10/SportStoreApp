import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Context/AuthProvider/AuthProvider';

export default function Profile() {
    const auth = useAuth();
    const navigateToHome = useNavigate();

    function handleLogout(){
        auth.logout();
        navigateToHome('/');
    }

  return (
      <div>
          <h1>This Is Profile Page</h1>
          <h1><b>Welcome {auth.user}</b></h1>
          <button onClick={handleLogout}>Logout</button>
      </div>
  )
}
