const animal_data = require('./animal-data.json')


class Animal 
{
    constructor(name, species, color, hunger = 50)
    {
        this.name = name
        this.species = species
        this.color = color
        this.hunger = hunger
    }

    greet()
    {
        console.log(`Hi ${this.name} ${this.species}`)
    }

    feed()
    {
        this.hunger -= 20;
        console.log(`Yum, I love food`)
    }
}

class Cat extends Animal
{
    constructor(name, color, hunger = 50)
    {
        super(name, 'cat', color, hunger)
        this.food = 'fish'
    }

    greet()
    {
        console.log(`Meow ${this.name} ${this.species}`)
    }

    feed()
    {
        console.log(`Yum, I love ${this.food}`)
    }
}

class Dog extends Animal
{
    constructor(name, color, hunger = 50)
    {
        super(name, 'dog', color, hunger)
        this.food = 'kibble'
    }

    greet()
    {
        console.log(`Woof ${this.name} ${this.species}`)
    }

    feed()
    {
        console.log(`Yum, I love ${this.food}`)
    }
}

class AnimalShelter
{
    constructor()
    {
        this.animals = [];
    }

    addAnimal(animal)
    {
        this.animals.push(animal);
    }

    adopt(animal)
    {
        let num = this.animals.indexOf(animal)
        this.animals.splice(num, 1)
    }

    getAnimalsBySpecies(species)
    {
        return this.animals.filter(a => a.species === species)
    }

}

let shelter = new AnimalShelter()

for (const a of animal_data)
{
    let hunger = a.hunger ? a.hunger : 50
    let animal;
    if (a.species === 'cat')
    {
        animal = new Cat(a.name, a.color, hunger)
    }
    else if (a.species === 'dog')
    {
        animal = new Dog(a.name, a.color, hunger)
    }
    else
    {
        animal = new Animal(a.name, a.species, a.color, hunger)
    }
    shelter.addAnimal(animal)
}

 console.log(shelter.animals)

 let tyler = new Cat('Tyler', 'grey')
 let sam = new Dog('Sam', "purple")

tyler.greet()
sam.greet()
sam.feed()
tyler.feed()

for (let a of shelter.animals)
{
    a.greet()
    a.feed()
}