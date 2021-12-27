import React from 'react'
import F from './F';

//REact Functinal Compoents
function E({address}) {
    return (
        <>
            <h1>{address}</h1>   
            <F final={address} />
        </>
    )
}
export default  E;
