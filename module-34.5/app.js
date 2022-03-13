const loadData = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => displayData(data));
}
loadData();
const displayData = (data) => {
    const container = document.getElementById('container')
    const slicedData = data.slice(0,10)
    slicedData.forEach(element => {
        const div = document.createElement('div')
        div.innerHTML = `
        <h1>${element.name}</h1>
            <p>${element.body}</p>
           
            <button onclick="displayDataDetias(${element.id})">see More</button>
        `;
        container.appendChild(div)
    });
}
const displayDataDetias = (data) => {
    const url = `https://jsonplaceholder.typicode.com/comments/${data}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => hello(data));
}
const hello = (data) => {
    console.log(data)
    const container = document.getElementById("detail");
    container.innerHTML = `
    <h4>${data.name}</h4>
            <p>${data.body}</p>
    `;
}