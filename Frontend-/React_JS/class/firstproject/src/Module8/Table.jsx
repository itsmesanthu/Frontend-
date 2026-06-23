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
    <table border={2}>
        <tr>
            <th>id</th>
            <th>title</th>
            <th>price</th>
            <th>description</th>
            <th>category</th>
            <th>image</th>
            <th>rate</th>
            <th>count</th>
        </tr>
        {data.map((ele)=>{
            return(
                <tr key={ele.id}>
            <th>{ele.id}</th>
            <th>{ele.title.substring(0,20)}</th>
            <th>{ele.price}</th>
            <th>{ele.description}</th>
            <th>{ele.category}</th>
            <th><img src={ele.img}alt="no image" height={100} width={100} /></th>
            <th>{ele.rating.rate}</th>
            <th>{ele.rating.count}</th>
                </tr>
            )
        })}
    </table>
      )}

    </div>
  )
}

export default Eax5
