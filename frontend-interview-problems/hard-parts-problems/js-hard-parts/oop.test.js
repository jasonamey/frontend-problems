const oopFunctions = require("./oop.js")

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
    const logSpy = jest.spyOn(console, 'log');
    personStore.greet()
    expect(logSpy).toHaveBeenCalledWith('hello');
  })
  //3
  it("personFromPersonStore creates person object with name and age and is able to log 'hello' ", () => {
    const { personFromPersonStore } = oopFunctions
    const sandra = personFromPersonStore('Sandra', 26)
    expect(sandra.name).toBe('Sandra')
    expect(sandra.age).toBe(26)
    const logSpy = jest.spyOn(console, 'log');
    sandra.greet()
    expect(logSpy).toHaveBeenCalledWith('hello');
  })
  //4
  it("personFromPersonStore creates person object that will log 'Hi, my name is {name}' with person object's name", () => {
    const { personFromPersonStore } = oopFunctions
    const sandra = personFromPersonStore('Sandra', 26)
    const logSpy = jest.spyOn(console, 'log');
    sandra.introduce()
    expect(logSpy).toHaveBeenCalledWith('Hi, my name is Sandra');
  })

})