const lat= 23.7238697
const lon= 90.3894119
const APIkey=f8a388f97f32e886efdcf6ebc6d5f579

const apiURL = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid={API key}`

// Make a GET request
fetch(apiURL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log(response.json()) 
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// console.log(first)