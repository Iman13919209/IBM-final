const { FlightFootprint } = require("../model/FlightSchema");
const { getCO2eEstimate } = require("../utils/getCO2eEstimate");

const getFlightFootprint = async (req, res) => {
    console.log("Received request body:", req.body);

    const { passengers, legs } = req.body;

    // Validate request
    if (!passengers || !Array.isArray(legs) || legs.length === 0) {
        return res.status(400).json({ error: "Passengers and valid legs are required" });
    }

    const data = {
        type: "flight",
        passengers,
        legs
    };

    try {
        const carbon_mt = await getCO2eEstimate(data);

        // Save footprint data to database
        await FlightFootprint.create({
            passengers,
            legs,
            carbon_mt
        });

        res.status(200).json({ carbon_kg: carbon_mt * 1000 });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Carbon Interface API failed" });
    }
};
const getProducts1 =  async (req, res) => {
    try {
        const products = await FlightFootprint.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { getFlightFootprint,getProducts1 };
