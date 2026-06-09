import React ,{useState}from 'react'

function Ex5() {
    const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={{border:"2px solid none",borderColor:"none"}}>
      <h1>count :{count}</h1>
      <button onClick={increment}>Incre</button>
    </div>
  )
}

export default Ex5
