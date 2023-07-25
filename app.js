
const url = 'https://avspyros.github.io/npcdata/names-occupations.json';

async function getNPC() {

try {
  const response = await fetch(url);
  const npcs = await response.json();

  const npc = npcs.names[Math.floor(Math.random() * npcs.names.length)];

  function getAge(min, max) {
    const age = (Math.floor(Math.random() * (max - min + 1) + min));
    return age;
  }

  const occupation = npcs.occupations[Math.floor(Math.random() * npcs.occupations.length)];

  document.getElementById('npcname').innerHTML = npc;
  document.getElementById('npcage').innerHTML = getAge(17, 75);
  document.getElementById('npcoccupation').innerHTML = occupation;

  } catch(error) {
    console.log(error);
    document.getElementById('npcname').innerHTML = 'Something went terribly wrong!';
  }
}

// Event

document.getElementById('addnpc').addEventListener('click', getNPC);

// Year update

const currentDate = new Date();
let currentYear = currentDate.getFullYear();

document.getElementById('year').innerHTML = `${currentYear}`;