// 01:
const fatherName = 'Moniruzzaman'; //not change anymore
let fatherAge = 45;//it's changable

// 02: 
const templateString = `My father Name is:${fatherName} and he is ${fatherAge} years old`;

// 3.1:
const onePeraArrowFunc = (onePera) => onePera / 5;
// console.log(onePeraArrowFunc(5))
// 3.2:
const twoPeraArrowFunc = (x, y) => (x + 2) * (y + 2);
// console.log(twoPeraArrowFunc(2,2));
// 3.3:
const threePeraArrowFunc = (x, y, z) => x * y * z;
// console.log(threePeraArrowFunc(2,2,2));
// 3.4:
const fourPeraArrowFunc = (a, d) => {
    const x = a + 2;
    const y = d + 2;
    const multiply = x * y;
    return multiply
}
// console.log(fourPeraArrowFunc(1,1));
// 05:
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fiveTimes = numArray.map(x => x * 5);
// console.log(fiveTimes)
// 06:
const filterMethod = numArray.filter(x => x % 2 !== 0);
// console.log(filterMethod)
const arrayOfObject = [
    {price:39939},
    {price:5000, name:'phone'},
    {price:5000 , name:'mobile'},
    {price:3939},
    {price:3933939},
    {price:393939},
    {price:393333939},
]
const findMethod = arrayOfObject.find(x => x.price == 5000)
// console.log(findMethod)
// 08:
const simpleObj = {
    name:'hello', age:23, location:'dhaka'
}
const { name, age, location } = simpleObj;
// console.log(name,age,location)
// 09:
const simpleArray = [1, 2, 3];
const [,,three] = simpleArray;
// console.log(three)
//  10:
const threePeraArrowFunc2 = (x, y, z = 7) => x + y + z;
// console.log(threePeraArrowFunc2(1,2));
// 11:
const nestedObj = {
    name: { firstName: 'Muntasir', lastName: 'Ahmed' },
    stydy: {
        language: {
            name:['html','css','js']
        }
    }
}
const optionalChaining = name?.middleName?.hello;
// console.log(optionalChaining)