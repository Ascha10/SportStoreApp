import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Users() {
    return (
        <>
        <div>
            <h1>This Is Users Page</h1>
        </div>
        <Outlet/>
        </>
      )
}
