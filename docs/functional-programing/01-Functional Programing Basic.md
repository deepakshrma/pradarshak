
class: center, middle

# Functional Programming- Basic
![Lambda](static/images/lambda.png)

### By: Deepak Vishwakarma

---
### Agenda:
1. Introduction
2. Basic Understanding: 
   1. Self-invoking functions and closures
   2. Anonymous functions 
   3. Higher-order functions/ Pure functions
   4. Method chains  
3. The functional programmer’s toolkit 
   1. [Array].map.filter.reduce.concat.reverse.sort
   2. [Array].forEach
   3. [Array].every.some

---
class: center, middle
# Why ? Functional Programming

![Lambda](static/images/why_fn.png)
---
# Introduction 

#### Benefits:
1.  Functional style are clear.
2.  Functional programming provides use of Lambda calculus  

#### Cleaner code:  
*Functional programs are cleaner, simpler, and smaller. This simplifies debugging, testing,
and maintenance.*
---
### Imperative
```js
/**
*Problem 1:Write a function that converts a two-dimensional array into a one-dimensional array.
* */	
Solution 1: 
function mergeArraysIntoOne(arrays) {
   var count = arrays.length;
   var merged = [];
   var c = 0;
   for (var i = 0; i < count; ++i) {
       for (var j = 0, jlen = arrays[i].length; j < jlen; ++j) {
           merged[c++] = arrays[i][j];
       }
   }
   return merged
}
console.log(
   mergeArraysIntoOne(
       [
           [1, 4, 3],
           [6, 7],
           [2, 5]
       ]
   )
)
//output
//[ 1, 4, 3, 6, 7, 2, 5 ]
```
---
### Functional
```js
const mergeArraysIntoOneF = (arrays) => 
  arrays.reduce((prev, next) => prev.concat(next), [])

console.log(
   mergeArraysIntoOneF(
       [
           [1, 4, 3],
           [6, 7],
           [2, 5]
       ]
   )
)
//output
//[ 1, 4, 3, 6, 7, 2, 5 ]
```
---
class: center, middle
# Oh Nice!! Tell me more about it
![Tell Me](static/images/oh_nice.jpg)
---

## Is JavaScript a functional programming language?

**What defines a functional programming language?**   
1. A functional programming language is a language which enables programming in a functional style with higher order functions   
2. A functional programming language is a language with first class functions    
3. A functional programming language is a language with lambdas 


**[Final]**: A functional programming language is a language where you program only with pure functions and immutable data (no side effects)  
Reference: https://clojurefun.wordpress.com/2012/08/27/what-defines-a-functional-programming-language/  
---
class: center, middle
# Evaluation
![Tell Me](static/images/evolve.png)
---
## Self-invoking functions and closures
```js
//Design pattern to follow
var module = (function () {
    //private
    return {
        //public
    }
}());
```
```js
// module.js

// private here
module.exports = {
  //public here
}

```
---
```js
// Using Closure/ Proxy from Java
var
    obj1 = {value: 1},
    obj2 = {value: 2};
var ValueAccumulator =  (values, object) => {
    var values = [];
    var accumulate = (obj) => {
      if(typeof obj !== undefined) {
        values.push(obj.value)  
      }
      return values;
    }
    return accumulate;
};
//This allows us to do this:
var accumulator = ValueAccumulator();
accumulator(obj1);
accumulator(obj2);
console.log(accumulator());
// Output: [obj1.value, obj2.value]
```
---
##Anonymous functions    
```js
function powersOf(x) {
    return function (y) {
        // this is an anonymous function!
        return Math.pow(x, y);
    };
} 
powerOfTwo = powersOf(2);
console.log(powerOfTwo(1)); // 2
console.log(powerOfTwo(2)); // 4
console.log(powerOfTwo(3)); // 8
```
---
class: center, middle
# Higher-order functions 
![Tell Me](static/images/fun_in_fun.png)
---
## Higher-order functions  
>> Higher-order functions are functions that either take another 
function as the input or return a function as
the output.

## Pure functions      
>> Pure functions return a value computed using only the 
  inputs passed to it. Outside variables and global 
  states may not be used and there may be no side effects.
---
class: center, middle
# Pure Function
![Tell Me](static/images/pure_fn.jpg)
---

## Method chains- Builder Pattern  
```js
//	Instead	of	applying	the	functions	one	per	line...
var arr = [1, 2, 3, 4],
    arr1 = arr.reverse(),
    arr2 = arr1.concat([5, 6]),
    arr3 = arr2.map(Math.sqrt);

//	...they	can	be	chained	together	into	a	one-liner
console.log([1, 2, 3, 4].reverse().concat([5, 6]).map(Math.sqrt));

//	parentheses	may	be	used	to	illustrate
console.log(
    (
        (
            ([1, 2, 3, 4]).reverse()
        ).concat([5, 6])
    ).map(Math.sqrt)
);
```
---
class: center, middle
# Brace Yourself, Function is everywhere.. 

<br/>
![Tell Me](static/images/brace.jpg)
---
## How to create builder
**Return an array in javascript**   
```js
//Return an array in javascript
Array.prototype.zip =  (callback = (data) => data) 
  => this.map(callback)

//This would allow us to the following:

var arr = [4, 9, 16, 25];
console.log(
    arr.zip(function (data) {
        return Math.sqrt(data, 2);
    }).map(function (n) {
        return n * 2
    })
);
```
---
# The functional programmer’s toolkit   
```js
/**
 * [array] ==>{function(callback)} ==> [array]
 */
```
---
a) **Array.prototype.map()**  
```js
/*
 *Problem: Capitalize first character of word in a sentence
 */
var str = 'hello world how ya doing?';
// Capitalize first character of word in a string.
String.prototype.kebabCase = function () {
    return this.split(' ')
      .map( (s, i) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(' ')
}
console.log(
    str.kebabCase()
);
```
---
b) **Array.prototype.filter()**  
```js
/*
 *Problem: Collect only valid emails
 */
var emails = [
    'deepak@gmail.com',
    'deepak@gmail.c',
    'deepak1@gmail.co',
    'deepak*@gmail.com',
    'deepak+abc@gmail.in',
];
var emailReg = /\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/;
console.log(
    emails.filter(email => emailReg.test(email))
);
```
---
c) **Array.prototype.reduce()**  
```js
/*
 *Problem: Find greatest among the given numbers
 */
var numbers = [1, 252, 56, 3636, 8, 1, -1];

console.log(
    numbers.reduce((p, n) => Math.max(p, n))
);
/*
 *Problem: Highest paid employee
 */
var employees = [
    {name: 'deepak', salary: 1000, id: '1'},
    {name: 'sanjay', salary: 1001, id: '2'},
    {name: 'deepak', salary: 999, id: '3'}
];

console.log(
    employees.reduce((p, n) => p.salary > n.salary ? p : n)
);
```
---
d)  Array.prototype.forEach  
e)  Array.prototype.concat  
f)  Array.prototype.reverse 
g)  Array.prototype.sort    
h)  Array.prototype.every and Array.prototype.some  
```js
/*
 *Problem: Validate All user in json
 */
var {employees} = require('./../resource/empolyee');
var emailReg = /\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/;
const validate =  (employee) => emailReg.test(employee.email) && !isNaN(employee.age)
console.log(
    employees.every(validate)
)
/*
 *Problem: Validate some user in json
 */
console.log(
    employees.some(validate)
);
```
---
class: center, middle
# Say Again, Say that FP is easy :-D 

<br/>
![Tell Me](static/images/it_is_easy.jpg)
---
class: center, middle
# I am Lazy, So i [💙 FP]
---
class: center, middle

# Thanks... 🍻🥂