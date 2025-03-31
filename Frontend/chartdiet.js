const ctx = document.getElementById('carbonChart').getContext('2d');

const defaultValues = [27, 6, 1, 2, 3]; // Example baseline values

const carbonChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Beef', 'Chicken', 'Vegetables', 'Fruits', 'Milk'],
        datasets: [
            {
                label: 'Your Carbon Footprint (kg CO₂)',
                data: [0, 0, 0, 0, 0], // User input values
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(153, 102, 255, 0.7)'
                ]
            },
            {
                label: 'Average Carbon Footprint (kg CO₂)',
                data: defaultValues, // Baseline values for comparison
                backgroundColor: [
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(54, 162, 235, 0.3)',
                    'rgba(75, 192, 192, 0.3)',
                    'rgba(255, 206, 86, 0.3)',
                    'rgba(153, 102, 255, 0.3)'
                ]
            }
        ]
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

function updateChart(foodValues) {
    carbonChart.data.datasets[0].data = foodValues; // Update user data
    carbonChart.update();
}
