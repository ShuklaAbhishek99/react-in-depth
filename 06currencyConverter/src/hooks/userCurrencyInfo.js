import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            // we can access the object values with not just '.' operator but also with sqaure braces
            // just put the key as a string when using the square braces
            // res['key']
            .then((res) => setData(res[currency]))
        console.log(data)
    }, [currency])

    console.log(data)
    return data
}


export default useCurrencyInfo;