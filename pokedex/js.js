const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
const numberOfPokemon = 649;

async function fetchPokemonData() {
  try {
    for (let i = 1; i <= numberOfPokemon; i++) {
      const response = await fetch(`${apiUrl}${i}`);
      const data = await response.json();

      // Create a card element
      const a = document.createElement("a");
      const card = document.createElement('div');
      card.classList.add('pokemon-card');

      // Display the Pokémon name
      const nameElement = document.createElement('h2');
      nameElement.textContent = data.name;
      a.href = "./single.html?id="+i;

      // Display the Pokémon image
      const imageElement = document.createElement('img');
      imageElement.src = data.sprites.front_default;
      imageElement.alt = data.name;

      // Append elements to the card
      card.appendChild(nameElement);
      card.appendChild(imageElement);

      // Append the card to the pokedex-container
      document.getElementById('pokedex-container').appendChild(a);
      a.appendChild(card);
    }
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
  }
}

// Function to handle search input
function handleSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase();

  const cards = document.querySelectorAll('.pokemon-card');

  cards.forEach(card => {
    const name = card.querySelector('h2').textContent.toLowerCase();
    const isVisible = name.includes(searchTerm);

    card.style.display = isVisible ? 'block' : 'none';
  });
}

// Attach the handleSearch function to the input's 'input' event
document.getElementById('searchInput').addEventListener('input', handleSearch);

fetchPokemonData();
