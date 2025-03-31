const express = require('express');
//const axios=require('axios');
const cors = require('cors');
const { connectDB } = require('./configs/db');
require('dotenv').config();


const carbonRoutes = require('./route/carbonRoutes');
const authRoute=require('./route/authRoute')


const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth",authRoute);
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Carbon Footprint Calculator Backend!");
});

//app.use('/api/carbon', carbonRoutes); // API route
app.use('/api', carbonRoutes)

app.listen(process.env.PORT, async () => {
  try {
    await connectDB;
    console.log("DB is connected");
    console.log(`Server running at http://localhost:${process.env.PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
