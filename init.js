import Hero from "./hero.js";
import Enemy from "./enemyy.js";
let $hero = document.querySelector('.hero')
let $bgImg = document.querySelector('.bg-img')
// let $ghost = document.querySelector('.ghost')

// hero 좌우로 움직이기
function heroMoving(e){
    if (e.keyCode === 39){
        $hero.classList.remove('left')
        $hero.classList.add('right')
        if($hero.offsetLeft <= $bgImg.offsetWidth ){
            $hero.style.left = ($hero.offsetLeft + 10)+'px';
        }
    } else if (e.keyCode === 37){
        $hero.classList.remove('right')
        $hero.classList.add('left')
        if ($hero.offsetLeft > 0){
            $hero.style.left = ($hero.offsetLeft - 10)+'px';
        }
    }
}
document.addEventListener("keydown", heroMoving, false);



// ghost 내려오기
function play(){
    setInterval(() => {
        let newE = new Enemy()
    }, 3000);
}


// 시작전 3초 동안 안내 멘트 나오게 하기?
document.querySelector('button').addEventListener('click',play)