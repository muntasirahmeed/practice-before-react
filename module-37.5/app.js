// 01: with fetch and async
const  loadData =async () => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(data => displayData(data))
    const res = await fetch('https://jsonplaceholder.typicode.com/users') 
    const data = await res.json();
    displayData(data)
    
}
loadData();
const displayData = (data) => {
    data.forEach(element => {
    // console.log(element)    
    });
}
// 02: 
const arrowFunction = (x) => console.log(x);
// arrowFunction('Muntasir Ahmed')
// 03:
const variable = 'Muntasir Ahmed';
const tamplateString = `${variable} helloladfl;ajfd`;
// console.log(tamplateString)
// 06:
const arr1 = [1, 2, 3, 4, 5];
for (const item of arr1) {
    // console.log(item)
}
const obj1 = {
    name: 'Muntasir Ahemd', age: 45
}
for (const item in obj1) {
    const prop = item;
    const value = obj1[item];
    // console.log(prop,':', value)
}
// 07:
const arr2 = [1, 2, 4, 5, 67];
const duplicate = [...arr2];
// console.log(arr2)
// console.log(duplicate)
// 08:
const obj5 = { name: 'hello', age: 100 }
const { name, age } = obj5;
// console.log(name , age)
// 09: