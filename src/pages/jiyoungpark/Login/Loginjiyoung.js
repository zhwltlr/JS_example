import './Loginjiyoung.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Loginjiyoung() {
  const navigate = useNavigate();
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const saveUserId = e => {
    setIdValue(e.target.value);
  };
  const saveUserPw = e => {
    setPwValue(e.target.value);
  };
  const inputEnter = e => {
    if (e.code === 'Enter') {
      navigate('/main');
    }
  };

  const validator =
    idValue && idValue.includes('@') && pwValue && pwValue.length >= 5;

  return (
    <main className="login">
      <div className="loginContainer">
        <div className="inputContainer">
          <div className="loginLogo">westagram</div>
          <form>
            <input
              onChange={saveUserId}
              type="text"
              name="idInput"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={saveUserPw}
              onKeyDown={inputEnter}
              type="password"
              name="pwInput"
              placeholder="비밀번호"
            />
            <button
              onClick={() => {
                validator
                  ? navigate('/main')
                  : alert('아이디와 비밀번호를 확인해주세요');
              }}
              className="loginBtn"
              disabled={!validator ? true : false}
            >
              로그인
            </button>
          </form>
        </div>
        <p>비밀번호를 잊으셨나요?</p>
      </div>
    </main>
  );
}

export default Loginjiyoung;
