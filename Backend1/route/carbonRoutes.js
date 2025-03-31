const express = require('express');
const { getElectricityFootprint,  getProducts } = require('../controller/electricityController');
const { getVehicleFootprint, getProducts2 } = require('../controller/VehicleController');
const { getFlightFootprint, getProducts1 } = require('../controller/flightController');
//const { getTotalFootprint } = require('../../controller/carbonController');
 
const router = express.Router();


//router.post('/calculate',getCarbonFootprint);

router.get('/carbondata',getProducts)
router.get('/carbondata1',getProducts1)
router.get('/carbondata2',getProducts2)

router.post('/carbon/electricity', getElectricityFootprint);
router.post('/carbon/vehicle',getVehicleFootprint);
router.post('/carbon/flight',getFlightFootprint);

module.exports = router;

