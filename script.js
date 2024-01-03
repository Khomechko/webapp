const arr = [1, 2, 3, 4, 5]
console.log(arr.at(2))

//   >, <
//   >=, <=
//   ==, !=
//   ===, !==
//   ASCII table

console.log('a' > 'b')
console.log('55' == 'n')
console.log('a' > 'A')
console.log('abc' == 'acb')

const obj1 = {
	name: 'Alex',
	age: 24,
	gender: 'male'
}
const obj2 = obj1
console.log(obj1, obj2)

const obj3 = {
	...obj1
}

// console.log(obj3.age === obj4.age)
