const navbar = document.querySelectorAll('.nav-item');
const cardwrap = document.querySelectorAll(".card-wrap");


for(let i = 0; i < navbar.length; i++){
    navbar[i].addEventListener('click', function(){
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace('active', '');
        this.className += ' active';
    });
}

for(let x=0; x<navbar.length; x++) {
    navbar[x].addEventListener("click", ()=>{
        for(let y=0; y<cardwrap.length; y++) {
            if(x==y){
                cardwrap[y].classList.add("open");
            }
            else {
                cardwrap[y].classList.remove("open");
            }
        }
    });
}

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}


//dark mode
const cardToggle = document.querySelector('.card_toggle'),
  body = document.querySelector('body');

cardToggle.onclick = ()=> {
    body.classList.toggle('dark-theme');
    body.classList.toggle('is-dark');
}
