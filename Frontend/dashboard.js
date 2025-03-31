// //electric 
// async function getdata(){
//     const res=await fetch('http://localhost:5000/api/carbondata',{
//         method:"GET",
//     headers:{"Content-Type":"application/json"},
  
//     });
    
//     const Data=await res.json()
//     console.log(Data);
//     displaydata(Data)
//   }
//   //getdata();
  
//   function displaydata(Data){
//     Data.forEach((el)=> {
//       let div=document.createElement("div");
//       div.className="div1";
  
//       let carbon_mt=document.createElement("h2");
//       carbon_mt.innerText=el.carbon_mt;
//       div.append(carbon_mt);
//       let store= document.getElementById("totalcarbon");
      
//       store.append(div);
//     });
//   }
// //flight
//   async function getdata1(){
//     const res=await fetch('http://localhost:5000/api/carbondata1',{
//         method:"GET",
//     headers:{"Content-Type":"application/json"},
  
//     });
    
//     const Data1=await res.json()
//     console.log(Data1);
//     displaydata2(Data1);
//   }
//  // getdata();
  
//   function displaydata2(Data1){
//     Data1.forEach((el)=> {
//       let div=document.createElement("div");
//       div.className="div1";
  
//       let carbon_mt=document.createElement("h2");
//       carbon_mt.innerText=el.carbon_mt;
//       div.append(carbon_mt);
//       let store= document.getElementById("totalcarbonflight");
      
//       store.append(div);
//     });
//   }
//   //vehicle 

//   async function getdata3(){
//     const res=await fetch('http://localhost:5000/api/carbondata2',{
//         method:"GET",
//     headers:{"Content-Type":"application/json"},
  
//     });
    
//     const Data3=await res.json()
//     console.log(Data3);
//     displaydata3(Data3)
//   }
//   //getdata();
  
//   function displaydata3(Data3){
//     Data3.forEach((el)=> {
//       let div=document.createElement("div");
//       div.className="div1";
  
//       let carbon_mt=document.createElement("h2");
//       carbon_mt.innerText=el.carbon_mt;
//       div.append(carbon_mt);
//       let store= document.getElementById("totalcarbonvehicle");
      
//       store.append(div);
//     });
//   }
// getdata();
// getdata1();
// getdata3();
async function fetchCarbonData() {
    try {
        // Fetch all carbon footprint data
        const electricityRes = await fetch('https://ibm-final.onrender.com/api/carbondata');
        const flightRes = await fetch('https://ibm-final.onrender.com/api/carbondata1');
        const vehicleRes = await fetch('https://ibm-final.onrender.com/api/carbondata2');

        const electricityData = await electricityRes.json();
        const flightData = await flightRes.json();
        const vehicleData = await vehicleRes.json();

        // Calculate total CO₂ emissions
        let electricityCO2 = electricityData.reduce((sum, entry) => sum + entry.carbon_mt, 0) * 1000; // Convert metric tons to kg
        let flightCO2 = flightData.reduce((sum, entry) => sum + entry.carbon_mt, 0) * 1000;
        let vehicleCO2 = vehicleData.reduce((sum, entry) => sum + entry.carbon_mt, 0) * 1000;

        // Update UI
        document.getElementById("electricityData").textContent = `${electricityCO2.toFixed(2)}`;
        document.getElementById("flightData").textContent = `${flightCO2.toFixed(2)}`;
        document.getElementById("vehicleData").textContent = `${vehicleCO2.toFixed(2)}`;

        // Draw chart
        drawChart([electricityCO2, flightCO2, vehicleCO2]);

        // Generate suggestions based on total footprint
        generateSuggestions(electricityCO2, flightCO2, vehicleCO2);
    } catch (error) {
        console.error("Error fetching carbon data:", error);
    }
}

function drawChart(data) {
    const ctx = document.getElementById('carbonChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [ "Electricity", "Flight", "Vehicle"],
            datasets: [{
                label: ' Avg Carbon Footprint (kg CO₂)',
                data: [150,200,300],
                backgroundColor: ['#ff6333', '#36a2eb', '#ffce56'],
                borderWidth: 1
            },{
                label: ' Your Carbon Footprint (kg CO₂)',
                data: data,
                backgroundColor: ['#ff1111', '#36b2eb', '#ffce56'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

function generateSuggestions(electricity, flight, vehicle) {
    const totalCarbon = electricity + flight + vehicle;
    const suggestionBox = document.getElementById("suggestionBox") || document.createElement("div");
    suggestionBox.id = "suggestionBox";
    suggestionBox.style.background = "#fff3cd";
    suggestionBox.style.padding = "15px";
    suggestionBox.style.borderRadius = "10px";
    suggestionBox.style.marginTop = "20px";
    suggestionBox.style.fontWeight = "bold";
    suggestionBox.style.color = "#856404";
    
    let suggestionText = "";

    if (totalCarbon < 500) {
        suggestionText = "✅ Great job! Your carbon footprint is low. Keep using sustainable energy sources.";
    } else if (totalCarbon >= 500 && totalCarbon <= 1500) {
        suggestionText = "⚠️ Your carbon footprint is moderate. Consider using public transport or reducing unnecessary flights.";
    } else {
        suggestionText = "❌ Your carbon footprint is high! Try using renewable energy, carpooling, or limiting air travel.";
    }

    suggestionBox.textContent = suggestionText;
    
    const container = document.querySelector(".container2");
    if (!document.getElementById("suggestionBox")) {
        container.appendChild(suggestionBox);
    }
}

// Load data when the page loads
fetchCarbonData();
