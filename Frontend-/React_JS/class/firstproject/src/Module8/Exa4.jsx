import React, { useEffect, useState } from 'react'

function Eax4() {
    const[data,setData]=useState(null)
    useEffect(()=>{
        //side effect code for api fetching
        async function Fetchdata(){
            try{
                let response=await fetch('https://fakestoreapi.com/products')
                let res=await response.json()
                setData(res)
            }
            catch(error){
                console.log("why data not fetch")
            }
            
        }
        Fetchdata()
    },[])
  return (
    <div>
      <h2>Example for for api fetching using useEffect hook</h2>
          <pre>
        {data ? JSON.stringify(data, null, 2) : "Loading data..."}
      </pre>

    </div>
  )
}

export default Eax4
