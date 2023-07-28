import React, { useContext, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router';
import { getUrl } from '../helpers/baseUrl';
import jwt_decode from 'jwt-decode';

export const ProtectedRoute = ({children, roles}) => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const decodedToken = jwt_decode(token)
      const role = decodedToken.role;
      if(roles.includes(role)){
        return <Outlet />;
      }else {
        return <Navigate to={'/unauthorized'} />;      
      }
    } 

    return children
}

export default ProtectedRoute