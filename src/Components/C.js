import React from 'react'
import D from './D';

// RFC
function C({name}) {
    return (
        <React.Fragment>
            <h1>{name}</h1>
            <D surname={name} />
        </React.Fragment>
    )
}
export default C;