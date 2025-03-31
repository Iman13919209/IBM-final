// utils/getCO2eEstimate.js

const getCO2eEstimate = async (data) => {
    try {
      const response = await fetch('https://www.carboninterface.com/api/v1/estimates', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.CARBON_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Carbon Interface API error');
      }
  
      const responseData = await response.json();
      return responseData.data.attributes.carbon_mt;
  
    } catch (err) {
      console.error('API Fetch Error:', err.message);
      throw err;
    }
  };
  
  module.exports ={getCO2eEstimate} ;
  