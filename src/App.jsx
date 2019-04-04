import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, NavLink as Link, Route } from 'react-router-dom';

const Contact = lazy(() => import('./Pages/Contact'));
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));

const App = () => (
  <BrowserRouter>
    <Suspense maxDuration={2000} fallback={<div>Loading...</div>}>
      <div>
        <div className="menu">
          <Link exact to="/" activeClassName="active">
            Home
          </Link>
          <Link to="/about" activeClassName="active">
            About
          </Link>
          <Link to="/contact" activeClassName="active">
            Contact
          </Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Suspense>
  </BrowserRouter>
);

export default App;
