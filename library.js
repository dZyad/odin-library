const myPets = [];

class Pet {
    constructor(name, animal, isAdopted) {
        this.name = name;
        this.animal = animal;
        this.isAdopted = isAdopted;
        this.adopt = function () {
            this.isAdopted = true;
        };
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
    const adoptCard = document.createElement('button');
    const deleteCard = document.createElement('button');

    nameField.textContent = `Name: ${pet.name}`;
    animalField.textContent = `Animal: ${pet.animal}`;
    adoptField.textContent = pet.isAdopted ? 'Family member' : 'In transit';
    deleteCard.textContent = 'Release Pet';
    adoptCard.textContent = 'Adopt Pet';

    const disableButtons = () => {
        deleteCard.disabled = true;
        adoptCard.disabled = true;
    }

    if (pet.isAdopted) {
        disableButtons();
    }

    deleteCard.addEventListener('click', () => {
        index = myPets.findIndex((p) => p.name === pet.name);
        mainContainer.removeChild(newCard);
        myPets.splice(index, 1);
    });

    adoptCard.addEventListener('click', () => {
        pet.adopt();
        adoptField.textContent = 'Family member';
        disableButtons();
    })

    newCard.appendChild(nameField);
    newCard.appendChild(animalField);
    newCard.appendChild(adoptField);
    newCard.appendChild(adoptCard);
    newCard.appendChild(deleteCard);

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
const newPetAnimal = newPetForm.querySelector('#newPetAnimal');
const newPetSituation = newPetForm.querySelector('#newPetIsAdopted');

addButton.addEventListener('click', () => {
    newPetForm.showModal();
})

confirmBtn.addEventListener('click', (event) => {
    event.preventDefault();

    if (newPetName.value.trim() === '' || newPetAnimal.value.trim() === '') {
        alert('Please, fill all the fields.');
        return;
    }

    addPetToMyPets(newPetName.value, newPetAnimal.value, newPetSituation.checked);
    addPetCard(myPets[myPets.length - 1]);

    newPetForm.close();
})
