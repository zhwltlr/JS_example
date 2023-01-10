import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginjiyoung.scss';

function Loginjiyoung() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    id: '',
    pw: '',
  });

  const signIn = () => {
    fetch('http://10.58.52.105:3000/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: inputValue.id,
        password: inputValue.pw,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => alert('로그인 실패'))
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem('TOKEN', data.accessToken);
          alert('로그인 성공');
          navigate('/main-jiyoung');
        }
      });
  };

  const handleInput = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputValue(prev => ({ ...prev, [name]: value }));
  };

  const checkValidation = () => {
    validator ? signIn() : alert('아이디와 비밀번호를 확인해주세요');
  };

  const { id, pw } = inputValue;
  const validator = id.includes('@') && pw.length >= 5;

  return (
    <main className="login">
      <div className="loginContainer">
        <div className="inputContainer">
          <div className="loginLogo">westagram</div>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <input
              onChange={handleInput}
              type="text"
              name="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={handleInput}
              type="password"
              name="pw"
              placeholder="비밀번호"
            />
            <button
              onClick={checkValidation}
              className="loginBtn"
              disabled={!validator}
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
