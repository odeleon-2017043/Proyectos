const pokemonContainer = document.querySelector('.pokemon-container')

function buscarPokemon (id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
        crearPokemon(data);
    })
}

function buscarPokemons (number) {
    for (let i = 1 ; i<= number; i++ ) {
        buscarPokemon(i)
    }

}

function crearPokemon (pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;


    spriteContainer.appendChild(sprite);

    const name = document.createElement('p')
    name.classList.add('name');
    name.textContent = pokemon.name

    card.appendChild(spriteContainer);
    card.appendChild(name)

    pokemonContainer.appendChild(card);

}

buscarPokemon(Math.round(Math.random()*900));
buscarPokemon(Math.round(Math.random()*900));
buscarPokemon(Math.round(Math.random()*900));
buscarPokemon(Math.round(Math.random()*900));
buscarPokemon(Math.round(Math.random()*900));
buscarPokemon(Math.round(Math.random()*900));