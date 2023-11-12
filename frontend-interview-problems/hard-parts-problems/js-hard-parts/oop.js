/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 ***/

function makePerson (name, age) {
  const person = {}
  person.name = name
  person.age = age
  return person
}

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 2 ***/


const personStore = {
  greet: function () {
    console.log("hello")
  }
};

/*** CHALLENGE 3 ***/

function personFromPersonStore (name, age) {
  const person = Object.create(personStore)
  person.name = name
  person.age = age
  return person
}

/*** CHALLENGE 4 ***/

personStore.introduce = function () {
  console.log(`Hi, my name is ${ this.name }`);
}

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 5 ***/

function PersonConstructor (name, age) {
  this.name = name
  this.age = age
}

PersonConstructor.prototype.greet = function () {
  console.log('hello')
}


/*** CHALLENGE 6 ***/

function personFromConstructor (name, age) {
  return new PersonConstructor(name, age)
}

/*** CHALLENGE 7 ***/

PersonConstructor.prototype.introduce = function () {
  console.log(`Hi, my name is ${ this.name }`);
}

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 8 ***/

class PersonClass {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  greet () {
    console.log('hello')
  }

}

/*** CHALLENGE 9 ***/

class DeveloperClass {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  introduce () {
    console.log(`Hello World, my name is ${ this.name }`)
  }
}


module.exports = { makePerson, personStore, personFromPersonStore, PersonConstructor, personFromConstructor, PersonClass, DeveloperClass }

