// Router.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 이다빈의 컴포넌트
import Logindabin from './pages/dabinlee/Login/Logindabin';
import Maindabin from './pages/dabinlee/Main/Maindabin';

// 이유주의 컴포넌트
import Loginyuju from './pages/yujulee/Login/Loginyuju';
import Mainyuju from './pages/yujulee/Main/Mainyuju';

// 박지영의 컴포넌트
import Loginjiyoung from './pages/jiyoungpark/Login/Loginjiyoung';
import Mainjiyoung from './pages/jiyoungpark/Main/Mainjiyoung ';

// 조은혜의 컴포넌트
import Logineunhye from './pages/eunhyejo/Login/Logineunhye';
import Maineunhye from './pages/eunhyejo/Main/Maineunhye';

// 김보윤의 컴포넌트
import Loginboyoon from './pages/boyoonkim/Login/Loginboyoon';
import Mainboyoon from './pages/boyoonkim/Main/Mainboyoon';

// import 한 컴포넌트에 대한 경로를 각각 설정해줍니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-dabin" element={<Logindabin />} />
        <Route path="/main-dabin" element={<Maindabin />} />
        <Route path="/login-yuju" element={<Loginyuju />} />
        <Route path="/main-yuju" element={<Mainyuju />} />
        <Route path="/login-eunhye" element={<Logineunhye />} />
        <Route path="/main-eunhye" element={<Maineunhye />} />
        <Route path="/login-boyoon" element={<Loginboyoon />} />
        <Route path="/main-boyoon" element={<Mainboyoon />} />
        <Route path="/login-jiyoung" element={<Loginjiyoung />} />
        <Route path="/main-jiyoung" element={<Mainjiyoung />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
