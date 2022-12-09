import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

import Home from './components/Home';
import Test from './components/Test';
import NotFound from './components/error-handling/NotFound';
import UsersRoute from './routes/UsersRoute';

const App = () => {

  return (
    <div className="App">

      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/test" element={<Test />}/>
          <Route path="/users" element={<UsersRoute />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
