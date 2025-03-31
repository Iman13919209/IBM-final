document.getElementById('vehicleForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const distance = document.getElementById('distance').value;
   // const carbonOutput = document.getElementById('carbonOutput');
    const modelId = document.getElementById('vehicleModelId').value;
  
    try {
      const res = await fetch('https://ibm-final.onrender.com/api/carbon/vehicle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ distance_value: distance, vehicle_model_id: modelId })
      });
  
      const data = await res.json();
      document.getElementById('carbonOutput').textContent = `${data.carbon_kg} kg CO₂`;
  
      updateChart('Vehicle', data.carbon_kg);
    } catch (err) {
      console.error('Error:', err);
    }
  });
  