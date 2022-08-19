let user  = 'Ystorm5'
const formwebsite = 'https://meangkheang.github.io/simple-web/';
let endPoint = `https://api.github.com/users/${user}`;

const container = document.querySelector('.container');
const content = document.querySelector('#content');
const input = document.querySelectorAll('#input')[0];
const btnSubmit = document.querySelector('#btnSubmit');

fetchAPI();


btnSubmit.addEventListener('click',(e)=>{
    e.preventDefault();

    user= input.value;
    endPoint = `https://api.github.com/users/${user}`;

    if(!user) return
    fetchAPI();

    input.value = "";
});


async function fetchAPI(){
    const res = await fetch(endPoint);
    const data = await res.json();

    content.innerHTML = 
    `
        <a href="${data.html_url}" style="text-decoration: none">

        <div class="card" style="width: 13rem;">
        <img class="card-img-top" src="${data.avatar_url}" alt="Card image cap">
        <div class="card-body">
        <h4 class="card-text text-center"><strong>${data.login}</strong></h4>
        </div>
        </div>

        </a>
    `
}



