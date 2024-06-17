// const request = new XMLHttpRequest();

// request.open("GET", "https://cat-fact.herokuapp.com");

// request.send();



const request = new XMLHttpRequest();

request.open("GET", 'https://dog.ceo/api/breeds/list/all');

request.send();



request.onload = () => {
    console.log("terminou!");
};

request.onerror = () => {
    console.log
}
