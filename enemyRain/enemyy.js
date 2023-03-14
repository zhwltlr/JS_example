let num = document.getElementsByClassName('ghost')
class Enemy {
    constructor(){
        this.makeGhost()
        this.ghostDown() 
    }
    // 귀신 만들기
    makeGhost = () => {
        if (num.length < 15){
            this.ghost = document.createElement('div')
            this.ghost.className = 'ghost'

            let randomX = Math.floor(Math.random() * 800) + 1
            this.ghost.style.left = randomX + 'px'
            this.ghost.style.top = 0
            
            setInterval(() => {
               this.ghostDown()
            }, 60);
        }
    }


    // if length로 게임 끝났을 때 화면도 나타낼 수 있을 듯
    // clearInterval 확인해보기


    // 내려오기
    ghostDown = () => {
        const bgImg = document.querySelector('.bg-img')
        bgImg.appendChild(this.ghost)
        
        this.ghost.style.top = parseInt(this.ghost.style.top) + 5 + 'px'

        let ghostHeight = this.ghost.offsetTop
        let $hero = document.querySelector('.hero')
        let heroLeft = $hero.offsetLeft - 36
        let heroRight = $hero.offsetLeft + 36

        if(ghostHeight > 546 && this.ghost.offsetLeft < heroRight && this.ghost.offsetLeft > heroLeft){
            this.ghost.classList.add('death')
        }

    }
}


export default Enemy;