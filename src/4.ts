class Key {
    private signature: number = Math.random();
    getSignature(): number { 
        return this.signature; 
    }
}

abstract class House {
    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = [];
  
    constructor(key: Key) {
      this.key = key;
    }
  
    comeIn(person: Person) {
      if (this.door) {
        this.tenants.push(person);
      }
    }

    abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    openDoor(key: Key) {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        // console.log("Wellcome!");
      } else {
        // console.log("Where is key?");
      }
    }
}

class Person {
    constructor(private key: Key) { }
    getKey(): Key { return this.key }
  }
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};