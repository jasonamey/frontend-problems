<span style="font-family: courier;"> </span>

# Different ways to create objects 

## 1. Generate an object using a function

<pre>function userCreator(name, score) {
  const newUser = {}
  newUser.name = name
  newUser.score = score 
  newUser.increment = function(){
    newUser.increment++
  }
  return newUser

  const user1 = userCreator("Walter", 1)
  const user2 = userCreator("Donald", 10)
  
  user1.increment()
}</pre>

^The problem with this approach is it results in duplicated code, namely methods on the object, here it would be :<pre>increment</pre> 

## 2. Begin to use the prototype chain... 

<pre>function userCreator(name, score){
  const newUser = Object.create(userFunctionStore)
  newUser.name = name
  newUser.score = score
  return newUser
}

const userFunctionStore = { 
  increment: function(){this.score++},
  login: function(){console.log(`You're logged in as ${this.name ? this.name : "...oh I don't know you"}`)}
}

const user1 = userCreator("Donald", 19)
const user2 = userCreator("Walter", 3)
</pre>
<br/>
<pre style="display: inline;">Object.create(objectToReference)</pre> creates a .__proto__ for the created object 

### How to **subclass** with this approach : 

<pre>
function userCreate(name, score){
  const newUser = {}
  newUser.name = name 
  newUser.score = score
  return newUser
}
userFunctions = { 
  sayName: function(){
    console.log(`I am ${this.name}`)
  }, 
  increment: function(){
    this.score++
  }
}

const user1 = userCreator("Jason", 5)
user1.sayName() // "I am Jason"

function paidUserCreator(paidName, paidScore, accountBalance){
  const newPaidUser = userCreator(paidName, paidScore)
  Object.setPrototypeOf(newPaidUser, paidUserFunctions)
  newPaidUser.accountBalance = accountBalance
  return newPaidUser
}

const paidUserFunctions = { 
  increaseBalance: function(){
    this.accountBalance++
  }
}

Object.setPrototypeOf(paidUserFunctions, userFunctions)

const paidUser1 = paidUserCreator("Dognose", 8, 25)

paidUser1.increaseBalance()
paidUser1.sayName()
</pre> 
## 3. Introduce the "new" keyword which automates a few things... 

**"new" automates:**

1. creation of the user object, this
2. link of __ proto __ to prototype object
3. returning of the object 

**What the "new" keyword offers:**

<pre>
  //uppercase of UserCreator implies you need "new" to work : 

  function UserCreator(name, score){
  /*
  NOT NEEDED: 
  <span style="text-decoration: line-through;">const newUser = Object.create(userFunctionStore)</span>
  <span style="text-decoration: line-through;">newUser.name = name</span>
 
  <span style="text-decoration: line-through;">newUser.score= score</span>
  
  <span style="text-decoration: line-through;">return newUser</span>
  */
  this.score = score
  this.name = name
}
UserCreator.prototype // {}

UserCreator.prototype.increment = function(){
  this.score++
}

UserCreator.prototype.login = function(){
  console.log("Logged In!")
}
</pre>

The word <span style="font-family: courier;">new</span> mutates the execution context when you call <span style="font-family: courier;">userCreator</span> - it inserts <span style="font-family: courier;">this</span> to an empty object. The <span style="font-family: courier;">this</span> object has a the hidden dunder property  <span style="font-family: courier;">__ proto __</span> which links to <span style="font-family: courier;">prototype</span> object.  <span style="font-family: courier;">new</span> also auto assigns all arguments passed to the userCreator function to the  <span style="font-family: courier;">this</span> object i.e. : <span style="font-family: courier;">UserCreator("dognose") --> this.name = dognose</span>


### How to **subclass** with this approach : 

<pre>
//called with "new" 
function userCreator(name, score){
  this.name = name
  this.score = score
}

userCreator.prototype.sayName = function(){
  console.log("I'm " + this.name)
}

userCreator.prototype.increment = function(){
  this.score++
}

const user1 = new userCreator("Donald", 5)
const user2 = new userCreator("Walter", 4)

user1.sayName() // "I'm Donald" 

function paidUserCreator(paidName, paidScore, accountBalance){
  userCreator.call(this, paidName, paidScore)
  this.accountBalance = accountBalance
}

paidUserCreator.prototype = Object.create(userCreator.prototype)

paidUserCreator.prototype.increaseBalance = function(){
  this.accountBalance++
}

const paidUser = new paidUserCreator("Gaucho", 8, 25)

paidUser1.increaseBalance()

paidUser1.sayName()
</pre>

## 4. Introduction of the **class** keyword... 

<pre>
class UserCreator {
  constructor(name, score){
    this.name = name 
    this.score = score
  }

  increment(){
    this.score++
  }
  login(){
    console.log("Logged In...")
  }
}
</pre>

<span style="font-family: courier;">class</span> constructor removes the need for : 

<pre>
UserCreator.prototype.increment = function(){
  this.score++
}

UserCreator.prototype.login = function(){
  console.log("Logged In!")
}
</pre>

Stay away from using the dunder method __ proto __ and default to using .getPrototypeOf

### How to **subclass** with this approach : 
<pre>
class userCreator { 
  constructor(name, score){
    this.name = name
    this.score = score
  }
  sayName(){
    console.log(`I am ${this.name}`)
  }
  increment(){
    this.score++
  }
}

const user1 = new userCreator("Phil", 4)
const user2 = new userCreator("Tim", 4)

user1.sayName()

class paidUserCreator extends userCreator {
  constructor(paidName, paidScore, accountBalance){
    super(paidName, paidScore)
    this.accountBalance = accountBalance
  }
  increaseBalance(){
    this.accountBalance++
  }
}

const paidUser1 = new paidUserCreator("Alyssa", 8, 25)

paidUser1.increaseBalance()
paidUser1.sayName()


</pre>




