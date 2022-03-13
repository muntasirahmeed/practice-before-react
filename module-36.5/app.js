// 01:
const obj1 = {
    name: {
        firstName: 'Muntasir',
        lastName:'Ahmed'
    },
    age:21,
    language: ['html', 'css', 'js'],
    funcMethod: function (x) {
        this.age = this.age + x;
        // console.log(this.age)
        return this.age    
    }
}

const obj2 = {
    name: {
        firstName: 'hello',
        lastName:'kemon Acho?'
    },
    age:2,
    language: ['html', 'css', 'js'],
}
obj1.funcMethod(2);
const hello = obj1.funcMethod.bind(obj2);
hello(45);
obj1.funcMethod.call(obj2,45)
obj1.funcMethod.apply(obj2, [4])

// 02:
const destrucObj = `this is > ${obj1.name.firstName} ${obj1.name.lastName} and he is expeart in ${obj1.language[0]} ${obj1.language[1]} ${obj1.language[2]}` ;
// console.log(destrucObj)
// 3.1:
const zeroPeraArowFunc = () => 89;
// console.log(zeroPeraArowFunc())
// 3.2:
const onePeraArrowFunc = (x) => x / 7;
// console.log(onePeraArrowFunc(70))
// 3.2:
const twoPeraArrowFunc = (x, y) => (x + y) / 2;
// console.log(twoPeraArrowFunc(7, 2));
// 3.4:
const multilineArrowFunc = (x, y) => {
    const a = x + 7;
    const b = y + 7;
    const result = a + b;
    return result;
}
// console.log(multilineArrowFunc(7,7))
// 04:
const numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const mapOnNumbsArray = numsArray.map(x => x / 7);
// console.log(mapOnNumbsArray)
// 06:
const obj5 = { name: 'Muntasir Ahmed', age: 20 };
const { name, age } = obj5
// console.log(name, age)
const arr1 = [1545, 250000];
const [, balance] = arr1;
console.log(balance)
// 07:




