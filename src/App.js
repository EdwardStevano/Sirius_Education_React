import { React, Suspense, lazy, useState, useEffect as effect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Librairie de traduction
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


// Importation des helpers
import {checkmode} from './helpers/themeMode/checkmode'
import {isNightTime} from './helpers/isNightTime'

// MAIN PAGES
const Main = lazy(() => import('./pages/mainPage/main'))

// AUTHENTIFICATION PAGES
const Login = lazy(() => import('./pages/authPage/Authentification'))
const SignInPage = lazy(() => import('./pages/authPage/signIn/signIn'))
const SignUpPage = lazy(() => import('./pages/authPage/signUp/signUp'))
const ResetPassword = lazy(() => import('./pages/authPage/resetPassword/resetPassword'))

// REDIRECT PAGES
const NotFound = lazy(() => import('./pages/notFoundPage/notfound'))
const Unauthorized = lazy(() => import('./pages/unauthorizedPage/unauthorized'))

// TEST PAGES
const Loader = lazy(() => import('./pages/loaderPage/loader'))
const TokenTest = lazy(() => import('./pages/test/testToken'))
const CountUp = lazy(() => import('./pages/test/testCountUp'))

i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
  debug: true,
  fallbackLng: 'fr',
  backend: {
    loadPath: "/locales/{{lng}}/translation.json",
  },
});


function App() {


  // Effet pour mettre à jour le mode sombre en fonction de l'heure
  effect(() => {
    const isNight = isNightTime();
    // Stockez la valeur du mode sombre dans localStorage
    localStorage.setItem('SuperMode', isNight ? 'true' : 'false');
    checkmode()
  }, []);

  // THEME
  checkmode()

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* Main routes  */}
        <Route path='/' element={<Main />} />

        {/* Authentification routes  */}
        <Route path='/login' element={<Login />}>
            <Route index element={<SignInPage />} />
            <Route path='signin' element={<SignInPage />} />
            <Route path='signup' element={<SignUpPage />} /> 
        </Route>
        <Route path='/password/reset' element={<ResetPassword />} />

        {/* Redirect routes  */}
        <Route path='*' element={<NotFound />} />
        <Route path='/unauthorized' element={<Unauthorized />} />

        {/* test routes  */}
        <Route path='/loader' element={<Loader />} />
        <Route path='/token' element={<TokenTest />} />
        <Route path='/Countup' element={<CountUp />} />

      </Routes>
    </Suspense> 
  );
}

export default App;
