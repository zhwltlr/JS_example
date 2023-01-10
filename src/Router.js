// Router.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// 박지영의 컴포넌트
import Loginjiyoung from './pages/Login/Loginjiyoung';
import Mainjiyoung from './pages/Main/Mainjiyoung ';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Loginjiyoung />} />
        <Route path="/main" element={<Mainjiyoung />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
