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

## 3. Introduce the "new" keyword which automates a few things... 

**"new" automates:**

1. creation of the user object, this
2. link of __ proto __ to prototype object
3. returning of the object 

**What the "new" keyword offers:**

<pre>
  //uppercase of UserCreator implies you need "new" to work : 

  function UserCreator(name, score){
  <span style="text-decoration: line-through;">const newUser = Object.create(userFunctionStore)</span>
  <span style="text-decoration: line-through;">newUser.name = name</span>
  this.name = name
  <span style="text-decoration: line-through;">newUser.score= score</span>
  this.score = score
  <span style="text-decoration: line-through;">return newUser</span>
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

<span style="font-family: courier;">this</span> 

## 3. Introduction of the **class** keyword... 

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



