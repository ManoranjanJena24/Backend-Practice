let fruits = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon']
//['apple', 'oranges', 'empty string', 'mango', 'empty string', 'lemon']  expected O/P
var fruitsreplace=fruits.map((val) => {
    return val.replace(' ', 'empty string')
    // console.log(val)
})

console.log(fruitsreplace)