import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main />} />
        <Route
            path="/"
            element={<SignIn />}
          />
          <Route
            path="/signup"
            element={(<SignUp />)}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
