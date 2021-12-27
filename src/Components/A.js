import React, { useState } from 'react'
import B from './B'

//Functional Compoent
function A() {
    //States/ a data
    //Hook Variables
    
    const [news1, setNews1] = useState('Many governments and healthcare experts have warned that there is no room for complacency ')
    const [news2, setNews2] = useState('Many governments and healthcare experts have warned that there is no room for complacency ')
    const [news3, setNews3] = useState('Many governments and healthcare experts have warned that there is no room for complacency ')
    const [news4, setNews4] = useState('Many governments and healthcare experts have warned that there is no room for complacency ')
    const [news5, setNews5] = useState('Many governments and healthcare experts have warned that there is no room for complacency ')
    const [news6, setNews6] = useState('Many governments and healthcare experts have warned that there is no room for complacency ')

    return (
        <React.Fragment>
            <B name={news1}  />
            <img />
        </React.Fragment>
    )  

}
export default A;

