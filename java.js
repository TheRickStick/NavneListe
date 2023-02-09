const generateButton1 = document.getElementById("generateButton1");
const generateButton2 = document.getElementById("generateButton2");
const generateButton3 = document.getElementById("generateButton3");
const generateButton4 = document.getElementById("generateButton4");
const namesElement = document.getElementById("names");
const memeElement = document.getElementById("meme");

generateButton1.addEventListener("click", function() {
  fetchData(1);
});

generateButton2.addEventListener("click", function() {
  fetchData(2);
});

generateButton3.addEventListener("click", function() {
  fetchData(3);
});

generateButton4.addEventListener("click", function() {
  fetchMeme();
});

function fetchData(numberOfNames) {
  fetch(`https://sheets.googleapis.com/v4/spreadsheets/1b5Uf6JxBc-F1yazI_653cYkR2pxTFCyU2qnUkfIuo9o/values/Sheet1!A1:D?key=AIzaSyB1bQ9kyYXALIHZLOir7rHeSxzENpOWDTU`)
    .then(response => response.json())
    .then(data => {
      const names = data.values;
      let randomNames = [];

      for (let i = 0; i < numberOfNames; i++) {
        const randomIndex = Math.floor(Math.random() * names.length);
        const randomName = `${names[randomIndex][0]} ${names[randomIndex][1]}`;
        randomNames.push(randomName);
      }

      namesElement.innerHTML = randomNames.join(", ");
    });
}

async function fetchMeme() {
  const response = await fetch('https://meme-api.herokuapp.com/gimme');
  const data = await response.json();
  const randomMeme = data.url;
  memeElement.innerHTML = `<img src="${randomMeme}" alt="random meme">`;
}
