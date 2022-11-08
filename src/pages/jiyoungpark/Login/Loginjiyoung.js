import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginjiyoung.scss';

function Loginjiyoung() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    id: '',
    pw: '',
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const inputEnter = e => {
    if (e.code === 'Enter') {
      navigate('/main-jiyoung');
    }
  };
  const validator =
    inputValue.id &&
    inputValue.id.includes('@') &&
    inputValue.pw &&
    inputValue.pw.length >= 5;

  return (
    <main className="login">
      <div className="loginContainer">
        <div className="inputContainer">
          <div className="loginLogo">westagram</div>
          <form>
            <input
              onChange={handleInput}
              type="text"
              name="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={handleInput}
              onKeyDown={inputEnter}
              type="password"
              name="pw"
              placeholder="비밀번호"
            />
            <button
              onClick={() => {
                validator
                  ? navigate('/main-jiyoung')
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
