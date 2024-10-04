let navBtn = document.getElementById('nav-toggle-btn');

navBtn.addEventListener('click',()=>{
    let links = document.querySelector('.toggle');
    links.classList.toggle('toggle-navbar');
});