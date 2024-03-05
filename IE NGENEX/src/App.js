import React from 'react';
import Navbar from './components/Navbar';
import '../src/style/App.css';
import Home from './pages/Home';
import Deals from './pages/Deals';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PreLoader from './components/Preloader';
import './style/components/Preloader.css'
import Privacy from './pages/Privacy';
import Cook from './components/CookieConsent';


function App() {
  return (
    <>
      <PreLoader />
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/deals' component={Deals} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/privacy' component={Privacy} />
        </Switch>
      </Router>
      <Cook />
    </>
  );
}

export default App;
