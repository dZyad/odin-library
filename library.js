const myPets = [];

class Pet {
    constructor(name, animal, isAdopted) {
        this.name = name;
        this.animal = animal;
        this.isAdopted = isAdopted;
    }
}

function addPetToMyPets(name, animal, isAdopted = false) {
    const pet =  new Pet(name, animal, isAdopted);
    myPets.push(pet);
}

addPetToMyPets("Mixtsu", "Cat", true);
addPetToMyPets("Pompi", "Cat", true);
addPetToMyPets("Flora", "Cat", true);
addPetToMyPets("Bongo", "Dog", false);

function addPetCard(pet) {
    const mainContainer = document.querySelector('main');
    const newCard = document.createElement('div');
    newCard.className = 'card';

    const nameField = document.createElement('p');
    const animalField = document.createElement('p');
    const adoptField = document.createElement('p');

    nameField.textContent = `Name: ${pet.name}`;
    animalField.textContent = `Animal: ${pet.animal}`;
    adoptField.textContent = pet.isAdopted ? 'Family member' : 'In transit';

    newCard.appendChild(nameField);
    newCard.appendChild(animalField);
    newCard.appendChild(adoptField);

    mainContainer.appendChild(newCard);
}

function addActualPets() {
    for (const pet of myPets) {
        addPetCard(pet);
    }
}

addActualPets();

const addButton = document.querySelector('#addPetButton');
const newPetForm = document.querySelector('#newPetForm');
const confirmBtn = newPetForm.querySelector("#confirmBtn");
const newPetName = newPetForm.querySelector('#newPetName');
const newPetType = newPetForm.querySelector('#newPetAnimal');
const newPetSituation = newPetForm.querySelector('#newPetIsAdopted');

addButton.addEventListener('click', () => {
    newPetForm.showModal();
})

confirmBtn.addEventListener('click', (event) => {
    event.preventDefault();
    addPetToMyPets(newPetName.value, newPetType.value, newPetSituation.checked);
    addPetCard(myPets[myPets.length - 1]);

    newPetForm.close();
})