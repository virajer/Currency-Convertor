// import { useEffect,useState } from "react";


// export default function useCurr(currency){
//     let[data,setData] = useState({})
//     useEffect(()=>{fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/
//         currency-api@latest/v1/currencies/${currency}.json`)
//         .then((res)=>res.json())
//         .then((res)=>setData(res[currency]))
//         console.log(data);
//     },[currency])
//     return data
    
// }
 


import { useState,useEffect } from "react"

function UseCurr(currency) {
    let[data,setData] = useState({})
    useEffect(()=>{fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`) 
    .then((res)=>res.json())
    .then((res)=>setData(res[currency]))
    console.log(data);
},[currency])
return data
}
export default UseCurr