const lines = document.querySelectorAll('.bold-line');
const buttons = document.querySelectorAll('.button');
const descriptionBtn = document.querySelector('.descriptBtn');
const graphicBtn = document.querySelector('.graphicBtn');
const refactorBtn = document.querySelector('.refactorBtn');
const front = document.querySelector('.front-content');
const back = document.querySelector('.back-content');
const card = document.querySelector('.card-inner');

lines.forEach(line => {
    line.addEventListener('click',function(){
        this.classList.add('show');
    })
});

buttons.forEach(button => {
    button.addEventListener('click',function(){
        if(document.querySelector('.active') !== this){
            document.querySelector('.active').classList.remove('active');
        } 
        this.classList.add('active');
    })
});

descriptionBtn.addEventListener('click', () => {
    front.classList.add('flipped');
    back.classList.add('flipped');
});
graphicBtn.addEventListener('click', () => {
    front.classList.remove('flipped');
    back.classList.remove('flipped');
});

refactorBtn.addEventListener('click', () => {
    front.classList.add('refactor');
});