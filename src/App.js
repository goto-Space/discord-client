import React from 'react';

import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={(<SignUp />)} />
      </Routes>
    </div>
  );
}

export default App;
