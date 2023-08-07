import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/index.css'

/* Screens */
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/pages/AboutScreen';
import ContactScreen from './screens/pages/ContactScreen';
import PrivacyScreen from './screens/pages/PrivacyScreen';
import TermsScreen from './screens/pages/TermsScreen';
import JobScreen from './screens/JobScreen';

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path='/' element={<App />}>
         <Route path='/' index={true} element={<HomeScreen />} />
         <Route path='/job/:id' element={<JobScreen />} />
         <Route path='/about' element={<AboutScreen />} />
         <Route path='/contact' element={<ContactScreen />} />
         <Route path='/privacy' element={<PrivacyScreen />} />
         <Route path='/terms' element={<TermsScreen />} />
      </Route>
   )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
)