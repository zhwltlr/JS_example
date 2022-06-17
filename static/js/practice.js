import React, { useState } from 'react';

const practice = () => {


    let [변수, 변수변경함수] = useState(초기값);
    // 변수는 변경함수를 통해서만 변경할 수 있다

    function 반복되는ui (){
        const 어레이 = [];
        for(let i=0; i<3, i++){
            어레이.push(<div>안녕</div>);
        }
    }

    // for of, for in도 동일하게 짤 수 있다.


    return (
        <div>
            <div>
                <div className="title">개발 blog</div>
            </div>
            {/* jsx라고 불리우는 문법들을  여기에 적으면 됨 */}

            {/* 변경할 때는 무조건 변경함수를 써야함 */}




            <div className="list">
                <h2><span>좋아요</span></h2>
                <p>2월17일 발행</p>
                <hr />
            </div>

            <button onClick={()=>{}}></button>
            {/* 기본 onclick구조 => 함수써야함 */}

            {/* 컴포넌트로 만든 구문은 태그처럼 사용 가능하다 */}

            <Modal 작명 = {전송할state} ></Modal>
            {/* 자식 컴포넌트에게 물려줄때는 부모컴포넌트에서 state를 전송해줘야함 */}


            {/* 반복문으로 나타낼때는 map */}
            {/* a는 array안에 있는 모든 데이터 i는 순서(0~i) */}
            Array.map(function(a,i){
                return(
                    <div>어쩌구 반복문(변경함수로나타냄)</div>
                )
            })

            {/* 아래에서 정의한 컴포넌트 불러오기 */}
            {/* <Func /> */}
            {/* 부모 props물려주기 */}
            <Func 변수 ={변수변경함수}/>


            {/* input form */}
            <input onChange={(e)=>{입력값변경(e.target.value)}} />

            {/* 현재 위치의 입력하는 값이라는 뜻 */}



            {/* jsx에서 if대신 쓰는 것 */}
            {
                조건 ? 참 : 거짓
            }
            {
                조건
                ? 참
                : 거짓
            }
            {/* 이렇게 띄워서 쓰는 경우도 있음 */}

            <button onClick={()=>{코드}}>버튼1</button>
            {/* 주의사항 */}
            {/* 클릭시 어레이가 변경되는 경우가 있을 때 사용하면
            let arrayCopy = [...글제목]
            원본 어레이를 건들지 않고 사본을 만들어서 수정해야함 */}
            


        </div>

    );


    
    {/* component */}
    {/* function으로 정의하여 html을 쉽게 불러오는 것 */}

    function Func(props){
        //부모컴포넌트에서 받은 props가 있음 = 거대변수 같은 느낌
        // ***물려줄때는 무조건  앞에 props를 붙여야함
        // props.Array.content
        return(
            <div>어쩌고</div>
            <div>{props.Array.content}</div>
        )
        // props물려받을 때는 꼭 앞에 props(출신)을 적어줘야함
        
    }

};

export default practice;