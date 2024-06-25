export const geoApioptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '7f8dc42495msh47135902f940684p189a7djsn61676fd82666',
    'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
  }
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

// try {
// 	const response = await fetch( "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",geoApioptions );
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

