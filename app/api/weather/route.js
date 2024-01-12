import axios from 'axios';

export async function GET(request) {
const url = new URL(request.url);
  const cityname = url.searchParams.get('q') || 'London';
  const days = 6;
  try{
  const currentWeatherInfo = await axios.get(`https://api.weatherapi.com/v1/forecast.json?q=${cityname}&days=${days}&key=${process.env.API_KEY}`)
    return Response.json(currentWeatherInfo.data)
  }catch (error) {
    if (error.response && error.response.status === 404) {
      // City not found error
      return {
        status: 'error',
        error: {
          code: 1006,
          message: 'City not found',
        },
      };
    } else {
      // Other errors
      console.error(error);
      return {
        status: 'error',
        error: {
          code: 500, // Internal Server Error
          message: 'Something went wrong on the server',
        },
      };
    }
  }
}