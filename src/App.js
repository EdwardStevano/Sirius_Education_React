import { React, Suspense, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Importation des helpers
import {checkmode} from './helpers/themeMode'

// MAIN PAGES
const Main = lazy(() => import('./pages/mainPage/main'))

// AUTHENTIFICATION PAGES
const Login = lazy(() => import('./pages/authPage/Authentification'))
const ResetPassword = lazy(() => import('./pages/authPage/resetPassword/resetPassword'))

// REDIRECT PAGES
const NotFound = lazy(() => import('./pages/notFoundPage/notfound'))
const Unauthorized = lazy(() => import('./pages/unauthorizedPage/unauthorized'))

// TEST PAGES
const Loader = lazy(() => import('./pages/loaderPage/loader'))

// TEST PAGES
const TokenTest = lazy(() => import('./pages/test/testToken'))


function App() {


  checkmode()

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Main routes  */}
        <Route path='/' element={<Main />} />

        {/* Authentification routes  */}
        <Route path='/login' element={<Login />} />
        <Route path='/password/reset' element={<ResetPassword />} />

        {/* Redirect routes  */}
        <Route path='*' element={<NotFound />} />
        <Route path='/unauthorized' element={<Unauthorized />} />

        {/* test routes  */}
        <Route path='/loader' element={<Loader />} />
        <Route path='/token' element={<TokenTest />} />

      </Routes>
    </Suspense> 
  );
}

export default App;
