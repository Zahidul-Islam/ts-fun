# ts-fun
I have implements some functions from **lodash** library in typescript as a part of learning and understanding typescript language.

# Build
```
npm run build
```

# Running tests
```
npm test
```

# Linting
```
npm run lint
```

# Installation
```git clone https://github.com/Zahidul-Islam/ts-fun.git```

# Usage

```
import * as _ from './path-to-ts-fun' 
```

### _.add(num1, num2)

```
_.add(6, 4);
// => 10
```

### _.assign(...objects)

```
const foo = { a: 'a property' }
const bar = { b: 4, c: 'an other property' }

_.assign({ a: 'an old property' }, foo, bar)
// => { a: 'a property', b: 4, c: 'an other property' }
```

### _.chunk(array, size)

```
_.chunk(['a', 'b', 'c', 'd'], 2)
\\ => [['a', 'b'], ['c', 'd']]
```

### _.compact(array)
```
_.compact([0, 1, false, 2, '', 3, undefined])
\\ => [1, 2, 3]
```

### _.map()
```
let square = n => return n * n;

_.map([4, 8], square);
// => [16, 64]
```

### _.flatMap(array, func)
```
let duplicate = n => [n, n];

_.flatMap([1, 2], duplicate);
// => [1, 1, 2, 2]
```

### _.flatten(array)
```
_.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
```

### _.flattenDeep(array)
```
_.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
```

### _.head(array)
```
_.head([1, 2, 3]);
// => 1
```

### _.tail(array)
```
_.head([1, 2, 3]);
// => [2, 3]
```

### _.sortedUniq(array)
```
_.sortedUniq([1, 1, 2]);
// => [1, 2]
```

### _.time(num, func)
```
_.times(3, String);
// => ['0', '1', '2']
```
# License

This project is licensed under the MIT License

# Acknowledgments
This project is inspired by awesome **lodash** library