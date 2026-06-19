import React,{useState} from 'react'


function TodoList() {
  const [ele,setEle] = useState("")
  const [list,setList]=useState("")
  function todo(){
    if (ele.trim===""){
      return;
    }
    setList([...list,ele]);
    setEle("");
  }
    function deleteTodo(index) {
    setTodos(todos.filter((_, i) => i !== index));
  }

  return (
    <div>
      
    </div>
  )
}

export default TodoList
