import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/Login' element={<Login />} />
                <Route exact path='/Signup' element={<Signup />} />
                <Route exact path='/Dashboard' element={<Dashboard />} />
                <Route exact path='/Manage' element={<Manage />} />
                <Route exact path='/Profile' element={<Profile />} />
                <Route path='*' element={<Wildcard />} />
        </Routes>
      </Layout>
    );
  }
}
