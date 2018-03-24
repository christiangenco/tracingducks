---
title: JSX Spread Operator
date: "2018-03-24"
---

Commonly in React JSX code, you will see three dots used in code like this: `<Modal {...this.props} />`

It can be confusing if you've never seen this before. Are the three dots part of JSX? Is it called an [ellipsis](https://en.wikipedia.org/wiki/Ellipsis) like in english grammar? What is it doing?

These three dots are known as the [Spread Attribute](https://reactjs.org/docs/jsx-in-depth.html#spread-attributes) and they let you pass an entire object as attributes.

Instead of doing this:

```jsx
const App1 = props => {
  return <Greeting firstName={props.firstName} lastName={props.lastName} />
}
```

You can do this:

```jsx
const App2 = props => {
  return <Greeting {...props} />
}
```

This syntax came from the ES6 Spread/Rest Operator, which used to only work on Arrays similar to the [`Array.concat` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat):

```javascript
const array1 = ['a', 'b', 'c']
const array2 = ['d', 'e', 'f']

console.log(array1.concat(array2))
// ["a", "b", "c", "d", "e", "f"]

console.log([...array1, ...array2])
// ["a", "b", "c", "d", "e", "f"]
```

Javascript is [adding support for using the spread operator on objects in ES7](https://github.com/tc39/proposal-object-rest-spread), like you can do currently in JSX:

```javascript
const person1 = { name: 'George' }
const person2 = { age: 25 }

console.log(Object.assign({}, person1, person2))
// {name: "George", age: 25}

console.log({ ...person1, ...person2 })
// {name: "George", age: 25}
```
