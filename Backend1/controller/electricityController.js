const { CarbonFootprint } = require("../model/CarbonSchema");
const { getCO2eEstimate } = require("../utils/getCO2eEstimate");

const getElectricityFootprint = async (req, res) => {
  const { electricity_value, country, state } = req.body;

  const data = {
    type: "electricity",
    electricity_unit: "mwh",
    electricity_value,
    country,
    state,
  };
  

  try {
    const carbon_mt = await getCO2eEstimate(data);

//    await CarbonFootprint.create({
//       electricity_value,
//       carbon_mt,
//       country,
//       state,
//     });
    
const newFootprint = new CarbonFootprint({
    electricity_value,
    carbon_mt,
    country,
    state,
  });

  const savedFootprint = await newFootprint.save();
  console.log("Data saved to MongoDB:", savedFootprint);
    res.status(200).json({ carbon_kg: carbon_mt * 1000 });

  } catch (err) {
    res.status(500).json({ error: 'Carbon Interface API failed' });
  }
};
 

const getProducts =  async (req, res) => {
    try {
        const products = await CarbonFootprint.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
  

module.exports = { getElectricityFootprint,getProducts};
