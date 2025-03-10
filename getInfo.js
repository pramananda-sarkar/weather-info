const lat = 23.7238697;
const lon = 90.3894119;
const APIkey = "b7009e2a54384e80a0561051251003";
const BASEURL = "http://api.weatherapi.com/v1";
const url = `${BASEURL}/forecast.json?key=${APIkey}&q=${lat},${lon}&days=1`;



fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Extract hourly forecast data
    const hourlyData = data.forecast.forecastday[0].hour;
    const times = hourlyData.map(hour => new Date(hour.time).getHours());
    const temps = hourlyData.map(hour => hour.temp_c);

    // Create the chart
    const ctx = document.getElementById('weatherChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: times.map(t => `${t}:00`), // X-axis: hours
        datasets: [{
          label: 'Temperature (°C)',
          data: temps, // Y-axis: temperatures
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
            title: {
              display: true,
              text: 'Temperature (°C)'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Time (24h)'
            }
          }
        }
      }
    });
  })
  .catch(error => {
    console.error('Error:', error.message);
  });