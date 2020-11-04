const form = document.querySelector('form');

function formSubmited(e){
    e.preventDefault();
    let greetings = e.target.greetings.value;
    let cartType = e.target.cartType.value;
    let message = e.target.inputMessage.value;
    
    // form.style.display = "none"
}

fetch('https://pokeapi.co/api/v2/pokemon/25')
    .then(res => res.json())
    .then(data => console.log(data.name))
    .catch(err => console.log("an error occurred"));

   


form.addEventListener('submit', formSubmited);

