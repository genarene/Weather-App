
export async function getAllCountries() {
    try {
        const response = await fetch('https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all',
        		{
                    method: 'GET',   
			 headers: {
    'X-RapidAPI-Key': '9337f218d9msh41eb1ef54fa33d4p1fd528jsn60ae4d833ade',
    'X-RapidAPI-Host': 'ajayakv-rest-countries-v1.p.rapidapi.com'
  }
		}
        );
        return await response.map().json();
    } catch (error) {
        return []
    }

}


