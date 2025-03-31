const { VehicleFootprint } = require("../model/VehicleSchema");
const { getCO2eEstimate } = require("../utils/getCO2eEstimate");


const getVehicleFootprint =async (req,res) => {
    console.log("Received request body:", req.body);

  const { distance_value,  vehicle_model_id } = req.body;
  const distance_unit = 'km';
  const data= {
    type: 'vehicle',
    distance_unit,
    distance_value,
    vehicle_model_id
  };

  try {
    const carbon_mt = await getCO2eEstimate(data);
    await VehicleFootprint.create({
        distance_value,
        carbon_mt,
        vehicle_model_id,
        distance_unit

    });
    res.status(200).json({ carbon_kg: carbon_mt * 1000 });

  } catch (error) {
    res.status(500).json({ error: 'Carbon Interface API failed' });
  }
    
}
const getProducts2 =  async (req, res) => {
    try {
        const products = await VehicleFootprint.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
  
module.exports={getVehicleFootprint,getProducts2}