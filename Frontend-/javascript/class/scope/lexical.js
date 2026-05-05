function outer(){
    let a=10
    function inner(){
        console.log(a)//con access a becsuse of lexical scope
    }
    inner()
}
outer()