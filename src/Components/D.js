import React from 'react'
import E from './E'

export default function D({surname}) {
    return (
        
           <React.Fragment>
                <h1>{surname}</h1>
                <E address={surname} />
            </React.Fragment> 
    )
}

