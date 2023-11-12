const oopFunctions = require("./oop.js")

function logTest (func, obj, logResult) {
  const logSpy = jest.spyOn(console, 'log');
  func.call(obj)
  expect(logSpy).toHaveBeenCalledWith(logResult);
}

describe("test all oop functions from oop.js", () => {
  //1
  it.skip("makePerson creates person object with name and age", () => {
    const { makePerson } = oopFunctions
    const vicky = makePerson('Vicky', 24)
    expect(vicky.name).toBe('Vicky')
    expect(vicky.age).toBe(24)
  })
  //2
  it.skip("personStore logs 'hello' from greet function", () => {
    const { personStore } = oopFunctions
    logTest(personStore.greet, personStore, 'hello')

  })
  //3
  it.skip("personFromPersonStore creates person object with name and age and is able to log 'hello' ", () => {
    const { personFromPersonStore } = oopFunctions
    const sandra = personFromPersonStore('Sandra', 26)
    expect(sandra.name).toBe('Sandra')
    expect(sandra.age).toBe(26)
    logTest(sandra.greet, sandra, 'hello')
  })
  //4
  it.skip("personFromPersonStore creates person object that will log 'Hi, my name is {name}' with person object's name", () => {
    const { personFromPersonStore } = oopFunctions
    const sandra = personFromPersonStore('Sandra', 26)
    logTest(sandra.introduce, sandra, 'Hi, my name is Sandra')
  })
  //5
  it.skip("using new constructor, PersonConstructor is able to use greet function off its __proto__ property", () => {
    const { PersonConstructor } = oopFunctions
    const simon = new PersonConstructor;
    logTest(simon.greet, simon, 'hello')
  })
  //6
  it.skip("using personFromConstructor resulting object has name, age and can call greet and introduce", () => {
    const { personFromConstructor } = oopFunctions
    const mike = personFromConstructor('Mike', 30)
    expect(mike.name).toBe('Mike')
    expect(mike.age).toBe(30)
    logTest(mike.greet, mike, 'hello')
    logTest(mike.introduce, mike, 'Hi, my name is Mike')
  })
  //8
  it.skip("using ES6 class, object is created that can use greet method", () => {
    const { PersonClass } = oopFunctions
    const george = new PersonClass;
    logTest(george.greet, george, 'hello')
  })
  //9 
  it.skip("usign ES6 class, DeveloperClass assign a name and introduce method ", () => {
    const { DeveloperClass } = oopFunctions
    const thai = new DeveloperClass('Thai', 32)
    expect(thai.name).toBe('Thai')
    logTest(thai.introduce, thai, 'Hello World, my name is Thai')
  })
})