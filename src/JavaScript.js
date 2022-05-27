let moon = document.querySelector('.bxs-moon')
moon.addEventListener('click', ()=>{
    document.querySelector('.navigation').classList.toggle('dark_nav');
    document.querySelector('body').classList.toggle('dark_body');
    document.querySelector('.testimony_div').classList.toggle('dark_body');
    document.querySelector('.testimony').classList.toggle('dark_body');
})