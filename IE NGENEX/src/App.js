import React from 'react';
import Navbar from './components/Navbar';
import '../src/style/App.css';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PreLoader from './components/Preloader';
import './style/components/Preloader.css'
// import { CookieConsent } from 'react-cookie-consent';

function App() {
  return (
    <>
      <PreLoader />
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>

{/*
      <CookieConsent
        debug={true}
        location='bottom'
        style={{ background: 'black' }}
        buttonStyle={{ color: 'black', background: 'white', fontSize: '14px' }}
        buttonText = 'Got it!'
      >
        This Site uses Cookies. Visit our <a href="/privacy">privacy policy</a> for more.
      </CookieConsent> */}

    </>
  );
}

export default App;
