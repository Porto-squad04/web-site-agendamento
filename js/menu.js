var menuItem = document.querySelectorAll('.item-menu')
function selectLink(){
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click',selectLink)
)
// EXPANDIR O MENU

var btnExp = document.querySelector('#btn-exp')
var menuLateral = document.querySelector('.menu-lateral')
var subMenus = document.querySelectorAll('.sub-menu');

btnExp.addEventListener('click', function(){
    menuLateral.classList.toggle('expandir')

    // Se o menu lateral está encolhendo, esconda todos os sub-menus
    if (!menuLateral.classList.contains('expandir')) {
        subMenus.forEach(subMenu => {
            subMenu.style.display = 'none';
        });
    }
});

// SUB-MENU
document.addEventListener('DOMContentLoaded', (event) => {
    const subBtns = document.querySelectorAll('.sub-btn');
    subBtns.forEach(subBtn => {
        subBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const subMenu = subBtn.nextElementSibling;
            subMenu.style.display = subMenu.style.display === 'none' ? 'block' : 'none';
        });
    });
});
