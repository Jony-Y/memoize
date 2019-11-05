## Memoize
A small cool memoization tool for JS modules

### Usage

#### Basic usage
```javascript
const memoize = require('@Jony-Y/memoize');
const heavyLifting = memoize((item, items) =>  {
  console.log('Entered');
  return items.filter(i => i === item);
});

const items = [1,2,3,4,5,6,7,5,4,7,2,4,5,7,7,8,5,4,3];
console.log(heavyLifting(7, items));
// Entered
// [7,7,7]
console.log(heavyLifting(7, items));
// [7,7,7]
console.log(heavyLifting(1, items));
// Entered
// [1]
console.log(heavyLifting(1, items));
// [1]
``` 

#### Custom equalizer
You can also define your custom equal function  

```javascript
const memoize = require('@Jony-Y/memoize');
const isEqual = require('lodash/isEqual')
const heavyLifting = memoize((item, items) =>  {
  console.log('Entered');
  return items.filter(i => i === item);
}, isEqual);

const items = [1,2,3,4,5,6,7,5,4,7,2,4,5,7,7,8,5,4,3];
console.log(heavyLifting(7, items));
// Entered
// [7,7,7]
console.log(heavyLifting(7, items));
// [7,7,7]
console.log(heavyLifting(1, items));
// Entered
// [1]
console.log(heavyLifting(1, items));
// [1]
``` 

### Changelog 
See [changelog](https://github.com/Jony-Y/memoize/blob/master/CHANGELOG.md)