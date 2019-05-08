import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './header';

const Index = () => {
  return (
    <>
      <Header />
      <h2>Home</h2>
    </>
  );
};

const About = () => {
  return <h2>About</h2>;
};

const Users = () => {
  return <h2>Users</h2>;
};

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
};

export default AppRouter;
