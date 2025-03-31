// const express = require('express');
// const axios = require('axios');
// const path = require('path');


//const cors = require('cors');
// const corsOptions = {
//     origin: 'http://127.0.0.1:3000',  // Allow your frontend origin
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type'],
//   };
  
 // app.use(cors(corsOptions));
  

// const app = express();
// const PORT = 8080;

// const API_KEY = 'BC65ECSXGN1970WFWB4EMAAWG8'; // Replace this with your key
// const BASE_URL = 'https://beta3.api.climatiq.io/estimate';

// //app.use(cors());
// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'Frontend')));

// // === Helper Function ===
// async function getCO2e(data) {
//   const response = await axios.post(BASE_URL, data, {
//     headers: {
//       Authorization: `Bearer ${API_KEY}`,
//       'Content-Type': 'application/json',
//     },
//   });
//   return response.data.co2e;
// }

// // === Routes ===
// // 1. Travel Footprint
// app.post('/api/travel', async (req, res) => {
//   const { distance } = req.body;
//   const data = {
//     emission_factor: {
//       activity_id: "passenger_vehicle-vehicle_type_car-fuel_source_na-engine_size_na-vehicle_age_na-vehicle_weight_na",
//     },
//     parameters: {
//       distance: distance,
//       distance_unit: "km",
//     },
//   };
//   const co2e = await getCO2e(data);
//   res.json({ co2e });
// });

// // 2. Electricity Footprint
// app.post('/api/electricity', async (req, res) => {
//   const { kWh, country } = req.body;
//   const data = {
//     emission_factor: {
//       activity_id: "electricity-energy_source_grid_mix",
//       region: country || 'US',
//     },
//     parameters: {
//       energy: kWh,
//       energy_unit: "kWh",
//     },
//   };
//   const co2e = await getCO2e(data);
//   res.json({ co2e });
// });

// // 3. Shipping Footprint
// app.post('/api/shipping', async (req, res) => {
//   const { weight, distance } = req.body;
//   const data = {
//     emission_factor: {
//       activity_id: "freight_train-unknown_fuel",
//     },
//     parameters: {
//       weight: weight,
//       weight_unit: "kg",
//       distance: distance,
//       distance_unit: "km",
//     },
//   };
//   const co2e = await getCO2e(data);
//   res.json({ co2e });
// });

// // 4. Food Footprint
// app.post('/api/food', async (req, res) => {
//   const { weight, foodType } = req.body;
//   const data = {
//     emission_factor: {
//       activity_id: `food-${foodType}`,
//     },
//     parameters: {
//       weight: weight,
//       weight_unit: "kg",
//     },
//   };
//   const co2e = await getCO2e(data);
//   res.json({ co2e });
// });

// // === Start Server ===
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
