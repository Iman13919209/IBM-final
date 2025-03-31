// document.getElementById('infoIcon').addEventListener('click', function () {
//     const tooltip = document.getElementById('tooltip');
    
//     // Toggle visibility
//     if (tooltip.style.display === 'block') {
//       tooltip.style.display = 'none';
//     } else {
//       tooltip.style.display = 'block';
//     }
//   });
document.getElementById('flightForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const passengers = document.getElementById('passengers').value;
    const departure1 = document.getElementById('departure1').value;
    const destination1 = document.getElementById('destination1').value;
    const departure2 = document.getElementById('departure2').value;
    const destination2 = document.getElementById('destination2').value;

    const legs = [
        { departure_airport: departure1, destination_airport: destination1 },
        { departure_airport: departure2, destination_airport: destination2 }
    ];

    try {
        const res = await fetch('http://localhost:5000/api/carbon/flight', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ passengers, legs })
        });

        const data = await res.json();
        document.getElementById('carbonOutput').textContent = `Carbon Footprint: ${data.carbon_kg} kg CO₂`;
        
        updateChart('Flight', data.carbon_kg);
    } catch (err) {
        console.error('Error:', err);
    }
});

  