import React, { useEffect, useState } from 'react'

function Eax5() {
    const[data,setData]=useState(null)
    const[error,setError]=useState(false)
    useEffect(()=>{
        //side effect code for api fetching
        async function Fetchdata(){
            try{
                let response=await fetch('https://fakestoreapi.com/products')
                let res=await response.json()
                setData(res)
                setError(false)
            }
            catch(error){
                console.log("why data not fetch")
                setError(true)
            }
            
        }
        Fetchdata()
    },[])
  return (
    <div>
      <h2>Example for for api fetching using useEffect hook</h2>
      {error&&(<p>data loading...</p>)}
      {!error && data && (
        <ul>
          {data.map((ele) => (
            <li key={ele.id}>
              <h3>id: {ele.id}</h3>
              <h3>title: {ele.title}</h3>
              <p>description: {ele.description}</p>
            </li>
          ))}
        </ul>
      )}

    </div>
  )
}

export default Eax5
