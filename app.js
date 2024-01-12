const url = 'https://avspyros.github.io/npcdata/names-occupations.json';
const getNPCButton = document.getElementById('NPC');
const npcNameElement = document.getElementById('npcname');
const npcAgeElement = document.getElementById('npcage');
const npcOccupationElement = document.getElementById('npcoccupation');

getNPCButton.addEventListener('click', generateNPC);

async function generateNPC() {
  try {
    const response = await fetch(url);
    const npcs = await response.json();

    const getRandomElement = array => array[Math.floor(Math.random() * array.length)];

    const npcName = getRandomElement(npcs.names);
    const npcOccupation = getRandomElement(npcs.occupations);

    const getRandomAge = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    npcNameElement.innerHTML = npcName;
    npcAgeElement.innerHTML = getRandomAge(17, 75);
    npcOccupationElement.innerHTML = npcOccupation;
  } catch (error) {
    console.error(error);
    npcNameElement.innerHTML = 'Something went terribly wrong!';
  }
}

// Year update
const getYear = document.getElementById('year');
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
getYear.innerHTML = `${currentYear}`;
