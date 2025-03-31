let carbonChart; // Declare globally so updateChart can access it

window.onload = function () {
  const ctx = document.getElementById('carbonChart').getContext('2d');
  carbonChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Avg_value'],
      datasets: [{
        label: ' Avg. Carbon Footprint (kg CO₂)',
        data: [80],
        backgroundColor: 'rgba(59, 129, 176, 0.7)',
      
      },{
        label: 'Carbon Footprint (kg CO₂)',
        data: [],
        backgroundColor: 'rgba(215, 18, 18, 0.7)',
      
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  window.updateChart = updateChart;
  window.updateDefaultValue = updateDefaultValue;
};

function updateChart(label, value) {
  carbonChart.data.labels.push(label);
  carbonChart.data.datasets[1].data.push(value);
  carbonChart.update();
}

//update on dynamically
function updateDefaultValue(newValue) {
  carbonChart.data.datasets[0].data[0] = newValue; // Change default dataset value
  carbonChart.update();
}
