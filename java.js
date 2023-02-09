const generateButton1 = document.getElementById("generateButton1");
const generateButton2 = document.getElementById("generateButton2");
const generateButton3 = document.getElementById("generateButton3");
const generateButton4 = document.getElementById("generateMemeButton");
const namesElement = document.getElementById("names");
const memeElement = document.getElementById("meme");
const copyNameButton = document.getElementById("copyNameButton");

//Buttons

generateButton1.addEventListener("click", function() {
  fetchData(1);
});

generateButton2.addEventListener("click", function() {
  fetchData(2);
});

generateButton3.addEventListener("click", function() {
  fetchData(3);
});

//generateButton4.addEventListener("click", function() {
//  fetchMeme();
//});

copyNameButton.addEventListener("click", function() {
  const names = document.querySelector("#names").textContent;
  const tempInput = document.createElement("input");
  tempInput.style.position = "absolute";
  tempInput.style.left = "-9999px";
  tempInput.value = names;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
});

//Random Name API Call

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

      namesElement.innerHTML = randomNames.join(" ");
    });
}
/*
//Random meme API call

async function fetchMeme() {
  fetch("https://trending-memes-9gag.p.rapidapi.com/v1/fetch-sections?offset=0&limit=20&filter=Animal", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e78973b520mshaeeaad81a2125e3p1599c0jsna5fb4b93eaac",
      "X-RapidAPI-Host": "trending-memes-9gag.p.rapidapi.com"
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      if (!data.data) {
        throw new Error("No data received");
      }
      const randomIndex = Math.floor(Math.random() * data.data.length);
      const randomMeme = data.data[randomIndex];
      document.getElementById("memeImage").src = randomMeme.images.large.url;
    })
    .catch(error => console.error("There was a problem with the fetch operation: ", error));
}

document.getElementById("generateMemeButton").addEventListener("click", fetchMeme);

//Random Image 
const button = document.getElementById("fetchButton");
button.addEventListener("click", function() {
  var category = 'nature'
  fetch(`https://api.api-ninjas.com/v1/randomimage?category=${category}`, {
    method: "GET",
    headers: {
      "X-Api-Key": "YOUR_API_KEY",
      "Accept": "image/jpg"
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`There was a problem with the fetch operation: ${response.statusText}`);
      }
      return response.blob();
    })
    .then(imageBlob => {
      const imageUrl = URL.createObjectURL(imageBlob);
      console.log(imageUrl);
    })
    .catch(error => {
      console.error(error.message);
    });
});
*/

