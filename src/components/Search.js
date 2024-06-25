import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApioptions } from "../api.js"


const Search = (OnSearchChange) => {

  const [search, setSearch] = useState(null);

  const loadoptions = (inputValue) =>  {
    return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApioptions)
      .then(response => response.json)
      .then(response => {
        return {
          options: response.data.map((city) =>{
            return {
              value:`${city.latitude},${city.longitude}` ,
              label:`${city.name},${city.countryCode}`,
            }
          })
        }
      })
      .catch(err => console.error(err));
  }
  const handleChange = (searchData) => {
    setSearch(searchData);
    OnSearchChange(searchData);
  }

  return (
    <AsyncPaginate
      placeholder="Search for City"
      debounceTimeout={600}
      value={search}
      onChange={handleChange}
      loadOptions={loadoptions}
    />
  );
}

export default Search;