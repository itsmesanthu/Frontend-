import React from 'react'
import Child from './Child'

const Parent = () => {
    let name = "tejsh"
    const age = 24
    let condition = true
    return (
        <div>
            <h1>Parent Component</h1>
            <Child name="santhu" age={20} condition={true} />
            <Child name="tanu" age={25} condition={false} />
            <Child name="raki" age={5} condition={false} />
            <Child name={name} age={age} condition={condition} />
        </div>
    )
}

export default Parent