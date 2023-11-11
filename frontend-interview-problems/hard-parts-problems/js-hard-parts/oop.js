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

//makePerson (name, age){
// return { name, age }
// }

const vicky = makePerson('Vicky', 24);


// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24

//

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 2 ***/


const personStore = {
  greet: function () {
    console.log("hello")
  }
};

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'


/*** CHALLENGE 3 ***/

function personFromPersonStore (name, age) {
  const person = Object.create(personStore)
  person.name = name
  person.age = age
  return person
}

const sandra = personFromPersonStore('Sandra', 26);


// /********* Uncomment these lines to test your work! *********/
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 4 ***/

personStore.introduce = function () {
  console.log(`Hi, my name is ${ this.name }`);
}

// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'


/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 5 ***/

function PersonConstructor () {
  // add code here


}


// /********* Uncomment this line to test your work! *********/
const simon = new PersonConstructor;
// simon.greet(); // -> Logs 'hello'


module.exports = { makePerson, personStore, personFromPersonStore, PersonConstructor }