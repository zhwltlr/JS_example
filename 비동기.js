// 비동기와 동기
// async & sync
// 동기: 1번끝나고 2번 넘어가고... 순차적
// 비동기: 순서 관계없는 flow로 진행됨
console.log(1)
console.log(2)
console.log(3)
console.log(4)
// 이렇게 되면 1~4가 순차적으로 나타남
// 하지만 그렇지 않은 경우도 많다 -스레드
// 강의를 보는 눈, 강의를 듣는 귀가 병렬적으로 실행중
// js는 싱글 스레드 언어

document.querySelector('button').addEventListener('click',()=>{
    alert('hello')
    
    let pTag=document.createElement('p')
    
    pTag.textContent = 'hi'
    document.body.appendChild(pTag)
})
// 버튼 클릭하면 p만든후 body에 삽입
// 이 동작도 비동기이다.
// alert가 진행되기 전까지 아래의 코드는 실행되지 않는다.


// CallBack
[1,2,3].filter(function(ele){
    console.log(ele)
})
// 매개변수를 함수로 받는 것

Array.prototype.filter =function(CallBack){
    const array =this

    for(let i = 0; i<array.length;i++){
        CallBack(array[i],i,array)
    }
}
// 이벤트 리스너도 마찬가지다
Element.addEventListener('click',(e)=>console.log(e))
Element.addEventListener = function(type,callback){
    if(type === 'click'){
        const clickObj ={
            target:{}
        }
        callback(clickObj)
        // 콜백은 실행을 위임하는 것
    }
}


// promise
// 대기, 이행, 거부중 하나의 상태를 가진다
// 성공 상태는 then 메서드를 이용한다
// catch는 실패했을때 진행할 코드
const res = Promise.resolve('성공')
const rej = Promise.reject('실패')
res
    .then((resolve)=>{
        console.log('1회' + resolve)
        return res //이게 아래로 내려가고
    })
    .then((resolve)=>{
        console.log('2회' + resolve)
        return res //또 내려가고
    })
    .then((resolve)=>{
        console.log('3회' + resolve)
        return res // 내려가서
    })
    .then((resolve)=>{
        console.log('4회' + resolve)
        return res  // 1회~ 4회가 모두 출력된다
    })


res
    .then((resolve)=>{
        console.log('1회' + resolve)
        return res //이게 아래로 내려가고
    })
    .then((resolve)=>{
        console.log('2회' + resolve)
        return rej //rej로 설정돼서 2회까지만 나오지만
    })
    .catch((reject)=>{
        console.log('3회' + reject)
        return res // catch 구문을 통해서 실패가 표시되고
    })
    .then((resolve)=>{
        console.log('4회' + resolve)
        return res  // 4회까지 코드실행된다
    })



// new promise
const one = Promise.resolve('1')
const two = Promise.resolve('2')
const three = Promise.resolve('3')

// 아래의 문제를 해결하기 위해서 이렇게 만들어주면 정상적으로 1,2,3이 출력됨
const twotwo = new Promise((resolve)=> setTimeout(()=>{
    resolve('2');
},2000))


one.then((oneRes)=>{
    console.log(oneRes) //1
    return two
}).then((twoRes)=>{
    console.log(twoRes) //2
    // 만약 여기에 settimeout을 사용하면?
    // 결과가 이상하게 나옴(1,3,2 이런식)
    return three
    //3도 마찬가지로 하면 3이 나온다
}).finally(()=>{console.log('end')}) 
// catch든 then이든 무조건 실행되는 구문
// 비동기를 명시적으로 나타낼 수 있음
// ex2)
const starbucks = function(coffename){
    return new Promise((resolve,reject)=>{
        if (coffename === '아메리카노'){
            resolve('ok')
        } else{
            reject('no')
        }
    })
}
starbucks('아메리')
    .then((res)=>console.log(res))
    .catch((rej)=>console.log(rej))
    .finally(()=>console.log('감사'))
//*******starbucks의 인자()를 설정해주지 않으면 주의 동작이 안됨 
// 위의 코드는 catch절이 실행될 것
//

// async & await
async function americano(somedrink){
    const result = await starbucks(somedrink)
    
    return result
}
console.log(americano(somedrink))