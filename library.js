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

function addRedSquare() {
    let newSquare = document.createElement('div');
    const mainContainer = document.querySelector('main');

    mainContainer.appendChild(newSquare);
}

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