import React, { useContext, useState } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router';
import Auth from "../context/IdUserContext"
import { getUrl } from '../helpers/baseUrl';

// type RequiredAuthType = {
//   roleRequired:'ADMIN'|'DOCTEUR'|'PATIENT'
// }

export const RequiredAuth = ({children}) => {
    const {IdUser} = useContext(Auth);
    const Url = getUrl(); 
    const location = useLocation();

    const getUrlWithoutPrefix = () => {
      const fullUrl = window.location.href;
      const prefix = Url;
  
      if (fullUrl.startsWith(prefix)) {
        return fullUrl.substring(prefix.length);
      }
  
      return fullUrl;
    };

    const urlWithoutPrefix = getUrlWithoutPrefix();
    
    if (localStorage.getItem('token')) {
        return <Outlet />;
    } else {
        localStorage.setItem('urlToAccess', urlWithoutPrefix);
        console.log(urlWithoutPrefix)
        return <Navigate to={'/authentification'} state={{ path: location.pathname }} />;      
    }

    return children
}

export default RequiredAuth

// import { useLocation as loc, Navigate, Outlet } from "react-router-dom";
// import { useContext as context} from "react";
// // import AuthContext from "../context/AuthContext";

// import React from "react";

// // const RequiredAuth = ({ allowedRoles }) => {
// const RequiredAuth = () => {
//   // const { auth } = context(AuthContext);
//   const location = loc();

  // return allowedRoles.find((role) => auth.role.includes(role)) ? (
  //   <Outlet />
  // ) : auth?.name ? (
  //   <Navigate to="/authentification" state={{ from: location }} replace />
  // ) : (
  //   <Navigate to="/authentification/signup" state={{ from: location }} replace />
  // );
//   if(localStorage.getItem('UserId')){
//     <Outlet />
//   }else{
//     <Navigate to="/authentification" state={{ path: location.pathname }} replace />
//   }
// };

// export default RequiredAuth;
