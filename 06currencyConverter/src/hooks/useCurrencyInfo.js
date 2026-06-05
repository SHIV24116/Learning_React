//hook will mainly be js based so we make it js file

import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})  // re-render happens whenever react thinks its output might have changed....by any change to state and props
    useEffect(() => {        // useEffect nhi use karenge and direcrly detch kare inside this function to infinite loop me phas jayga.....fetch will will not be executed after every re-render...will only be executed if dependncy changes 
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())  //since return value of api is string we neeed to convert it to json
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;