// menu
function menu() {
    const menuBtn = document.querySelector('#menuBtn');
    const navLinks = document.querySelector('.nav-links');
    console.log(menuBtn);
    menuBtn.addEventListener('click', ()=>{
        navLinks.classList.toggle('mobile-menu');
    })
}
menu()  