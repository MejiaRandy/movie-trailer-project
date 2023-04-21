let search = document.getElementById('search');
let search_icon = document.getElementById('search_icon');
let campanita = document.querySelector('bell')

search_icon.addEventListener('click', () => {
    search.classList.toggle('search_input'); 
})

campanita.addEventListener('click', ()=>{
    alert('coming soon')
})