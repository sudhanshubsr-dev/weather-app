import axios from 'axios'
export async function GET(request){
    const url = new URL(request.url)
    const query = url.searchParams.get('q');
    try{
    const res = await axios.get(`https://api.weatherapi.com/v1/search.json?q=${query}&key=${process.env.API_KEY}`)
    return Response.json(res.data)
    }catch(err){
        console.log(err)
    }
}