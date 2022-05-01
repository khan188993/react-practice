import React from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchParam = ()=>{
    const [searchParam,setSearchParam] = useSearchParams();
    // searchParam.set('code')
    console.log(searchParam.get('code'));
    return(
        <h1>Search Param Running</h1>
    )
}

export default SearchParam

