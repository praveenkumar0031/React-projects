import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate"
import { geo_Api_Url, geoApiOtps } from "../../api"
const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null);

    const loadOptions = async (inputValue) => {
        return fetch(`${geo_Api_Url}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
            geoApiOtps
        )
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,

                        }
                    })
                }
            })
            .catch((e) => console.error(e));
    }

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={900}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    )
}
export default Search;