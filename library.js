const myPets = [];

function Pet(name, animal, isAdopted) {
  this.name = name;
  this.animal = animal;
  this.isAdopted = isAdopted;
}

function addRedSquare() {
    let newSquare = document.createElement('div');
    const mainContainer = document.querySelector('main');

    mainContainer.appendChild(newSquare);
}