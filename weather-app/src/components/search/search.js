import { useState } from "react";
import {AsyncPaginate} from "react-select-async-paginate"
import {geoApiUrl,geoApiOtps} from "../../api"
const Search=({onSearchChange})=>{

    const [search,setSearch]=useState(null);
    
    const loadOptions=(inputValue)=>{
       /* return fetch(`${geoApiUrl}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
                     geoApiOtps
                    )
                .then((response)=>response.json())
                .then((response)=>response.json())
                .catch((e)=>console.error(e));*/
        /*const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4a67e9ddafmsh4cf46d60f0ac833p111906jsn538e2610c653',
		'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/
        
    }

    const handleOnChange=(searchData)=>{
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}
export default Search;