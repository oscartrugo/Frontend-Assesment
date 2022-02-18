const menuBtn = document.querySelector('.menu-btn');
const hamburguer = document.querySelector('.menu-btn__burguer');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        hamburguer.classList.add('open');

        showMenu = true;
    }else{
        hamburguer.classList.remove('open');

        showMenu = false;
    }
}