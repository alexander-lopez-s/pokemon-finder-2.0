
        // Create the component
    const createPokemonCard = (pokemonData) => {
    
        // Card container
        const card = document.createElement('div');
        card.classList.add('pokemon-card')
      
        // Main Data Container
        const mainDataContainer = document.createElement('div');
        mainDataContainer.classList.add('main-data');
      
        // Name and Image
        const name = document.createElement('h2');
        name.innerText = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
        name.classList.add('pokemon-name')
         
        const image = document.createElement('img');
        image.src = pokemonData.sprites.other["official-artwork"].front_default;
        image.alt = pokemonData.name;
      
        mainDataContainer.append(name, image);
      
        // Abilities
        const abilitiesContainer = document.createElement('div');
        abilitiesContainer.classList.add('abilities');
      
        const abilitiesHeading = document.createElement('h3');
        abilitiesHeading.innerText = 'Abilities';
        abilitiesHeading.classList.add('abilities-heading')
      
        abilitiesContainer.append(abilitiesHeading);
      
        for (const ability of pokemonData.abilities) {
          const abilityName = document.createElement('h3');
          abilityName.innerText = `✔ ${ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}`;
          abilitiesContainer.append(abilityName);
        }
      
        mainDataContainer.append(abilitiesContainer);
        card.append(mainDataContainer);
      
        // Stats Container
        const statsContainer = document.createElement('div');
        statsContainer.classList.add('stats-container');
      
        // Stats List
        const statsList = document.createElement('div');
        statsList.classList.add('stats-list');
      
        const pokedexHeading = document.createElement('h3');
        pokedexHeading.innerText = 'Pokedex';
        pokedexHeading.classList.add('pokedex-heading')
      
        const pokedexNumber = document.createElement('h3');
        pokedexNumber.innerText = `#${pokemonData.id}`; 
        pokedexNumber.classList.add('pokedex-number')
      
        const statsHeading = document.createElement('h3');
        statsHeading.innerText = 'Stats';
        statsHeading.classList.add('stats')
      
        const experience = document.createElement('h3');
        experience.innerText = `🏆 XP: ${pokemonData.base_experience}`;
      
        const type = document.createElement('h3');
        type.innerHTML = `🔹 Type: ${pokemonData.types[0].type.name}`;
     
      
        const height = document.createElement('h3');
        height.innerText = `📊 Height: ${pokemonData.height}m`;
      
        const weight = document.createElement('h3');
        weight.innerText = `🏋🏽 Weight: ${pokemonData.weight}lb`;
      
        statsList.append(pokedexHeading, pokedexNumber, statsHeading, experience, type, height, weight); // Add pokedexNumber here
        statsContainer.append(statsList);
        card.append(statsContainer);
      
        return card;
      };
      

const fetchPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(`Error occurred: ${err}`);
    }
};

// Call the function and handle the promise
fetchPokemon(1)
    .then(data => {
        const createCard = createPokemonCard(data);
        const pokemonCardContainer = document.getElementById("pokemon-cards-container");
        pokemonCardContainer.append(createCard)
        console.log(JSON.stringify(data, null, 2));
    })
    .catch(error => {
        console.error(`Error occurred: ${error}`);
    });


import handleTimeSelect from "./handlers/handleTimeSelect.js";
handleTimeSelect();



