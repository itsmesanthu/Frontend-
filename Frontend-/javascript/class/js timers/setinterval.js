  let sayhello=()=>{
        console.log("hello good morning");
        }
        setInterval(sayhello,2000) //call the function after 2 seconds

        let sayhello1=()=>{
            console.log("hello good evening");
        }
        setInterval(sayhello1,5000) //call the function after 5 seconds

        setInterval(function(){
            console.log("hello good night");
        },7000) //call the function after 7 seconds    
        let timerid=setInterval(sayhello,2000) //call the function after 2 seconds
        clearInterval(timerid) //stop the timer 
        setTimeout(() => {clearInterval(timerid)
            console.log("timer stopped")   
        }, 9000); 