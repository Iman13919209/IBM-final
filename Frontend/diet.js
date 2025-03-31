document.getElementById('dietForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Food emission factors (kg CO₂ per kg)
    const emissionFactors = {
        beef: 60,
        chicken: 6,
        vegetables: 0.5,
        fruits: 0.4,
        milk: 3.2
    };

    // Get user inputs
    const beef = parseFloat(document.getElementById('beef').value) || 0;
    const chicken = parseFloat(document.getElementById('chicken').value) || 0;
    const vegetables = parseFloat(document.getElementById('vegetables').value) || 0;
    const fruits = parseFloat(document.getElementById('fruits').value) || 0;
    const milk = parseFloat(document.getElementById('milk').value) || 0;

    // Calculate total CO₂ emissions
    const totalCarbon = 
        (beef * emissionFactors.beef) +
        (chicken * emissionFactors.chicken) +
        (vegetables * emissionFactors.vegetables) +
        (fruits * emissionFactors.fruits) +
        (milk * emissionFactors.milk);


       //const saved = totalCarbon.save(); 
       localStorage.setItem('dietCarbonFootprint', totalCarbon);


    // Display result
    document.getElementById('carbonOutput').textContent = `${totalCarbon.toFixed(2)} kg CO₂`;

    // Update chart
    updateChart([beef, chicken, vegetables, fruits, milk], totalCarbon);
});
