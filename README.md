# xswitch

xswitch (or expressive switch) aims to replace `if - else` usage and ` switch ` logic as well with a functional twist. Also, xswitch uses predicate functions as cases and returns `undefined` when no predicate case has been met.

## Example Usage
```
const result = xswitch(
  {
    xcase: (x,y,z) => x === y && y === z, 
    return: (x,y) => `All are equal`
  },
  {
    xcase: (x,y) => x === y, 
    return: (x,y) => `x:${x} is equal to y:${y}`
  },
  {
    xcase: (x,y,z) => x === z, 
    return: (x,y,z) => `x:${x} is equal to z:${z}`
  },
  {
    xcase: (x,y,z) => y === z, 
    return: (x,y,z) => `y:${y} is equal to y:${y}`
  },
)(1,2,1)
)
```

The example above will return: `x:1 is equal to z:1`

