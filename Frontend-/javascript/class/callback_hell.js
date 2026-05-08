console.log("customer enters resturant")
setTimeout(() => {
    console.log("waiter takes order")
    setTimeout(() => {
        console.log("chief starts cooking")
        setTimeout(() => {
            console.log("food is ready")
            setTimeout(() => {
                console.log("waiter serves food")
                setTimeout(() => {
                    console.log("customer starts eating")
                    setTimeout(() => {
                        console.log("customer pays the bill")
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)