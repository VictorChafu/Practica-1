    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu-navegation');

    console.log(menu)
    console.log(hamburger)

    hamburger.addEventListener('click', ()=>{
        menu.classList.toggle("spread")
    })
window.addEventListener('click', e=>{
    /*console.log(e.target)*/ /*para saber a que le estoy haciendo click */
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburger   ){
            menu.classList.toggle("spread")
    }
})