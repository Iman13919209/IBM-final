const Avgvalue = 200;


document.getElementById('footprintForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const electricityValue = document.getElementById('electricityKWh').value;

  const carbonOutput = document.getElementById('carbonOutput');

  try {
    const response = await fetch('http://localhost:5000/api/carbon/electricity', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        electricity_value: electricityValue / 1000, // convert kWh to MWh
        country: 'us', // Adjust as needed
        state: 'ny'    // Adjust as needed
      })
    });
    
    const data = await response.json();
    
    const carbonKg = data.carbon_kg;

    // Update result
    carbonOutput.textContent = `${carbonKg.toFixed(2)} kg CO₂`;
   // ✅ Ensure updateChart & updateDefaultValue are defined globally
   if (typeof window.updateChart === 'function' && typeof window.updateDefaultValue === 'function') {
    window.updateChart('Electricity', carbonKg);
    window.updateDefaultValue(Avgvalue); // Use the global Avgvalue
  } else {
    console.error("updateChart or updateDefaultValue is not defined globally.");
  }

  } catch (err) {
    carbonOutput.textContent = 'Error calculating carbon footprint';
    console.error('Error:', err);
  }
});

// let carbonChart; // Global chart reference

// function updateChart(carbonKg) {
//   const ctx = document.getElementById('carbonChart').getContext('2d');

//   if (carbonChart) {
//     // If chart exists, update data
//     carbonChart.data.datasets[0].data[0] = carbonKg;
//     carbonChart.update();
//   } else {
//     // Create new chart
//     carbonChart = new Chart(ctx, {
//       type: 'bar',
//       data: {
//         labels: ['Electricity Usage', "Default Measure"],
//         datasets: [{
//           label: 'CO₂ Emissions (kg)',
//           data: [carbonKg, defaultCarbonEl],
//           backgroundColor: ['rgba(54, 162, 235, 0.6)'],
//           borderColor: ['rgb(72, 54, 235)'],
//           borderWidth: 1
//         }]
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: true
//           }
//         }
//       }
//     });
//   }
// }
