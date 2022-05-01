import React from 'react'
import { useParams } from 'react-router-dom'

const UseParamPage = () => {
    const {category} = useParams();
    console.log(useParams());
    // filter kore category way product show krbo,

    
    return (
        <div>
            UseParamPage pages {category}
        </div>
    )
}

export default UseParamPage
