import React,{useState,useEffect} from 'react';
import './App.css';
import Form from './component/Form';
import ToDoList from './component/ToDoList';
const App =()=>{

    const [inputText,setInputText]=useState("");
    const[todos,setTodos]=useState([]);
    const[status,setStatus]=useState("all");
    const[filteredTodos,setFilteredTodos]=useState([]);
    const[errorText,setErrorText]=useState("");

    useEffect(()=>{
        getLocalTodos();

    },[])
   
    useEffect(()=>{
        filterHandler();
        saveLocalTodos()

    },[todos,status])

    const filterHandler=()=>{
        switch(status){
            case "completed":
                setFilteredTodos(todos.filter((todo)=>todo.completed==true))
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter((todos)=>todos.completed ==false))
                break;
            default:
                    setFilteredTodos(todos);
                 break
        }
    }
     const saveLocalTodos=()=>{
        localStorage.setItem("todos",JSON.stringify(todos));
     }
     const getLocalTodos=(()=>{
         if(localStorage.getItem("todos")==null){
             localStorage.setItem("todos",JSON.stringify([]));            
         }
         else{
             let todolocal=JSON.parse(localStorage.getItem("todos"));
             setTodos(todolocal);
         }

     })
  
    return (
        <div>
        <header>
            <h1>Todo List</h1>
        </header>
        <Form         
         setStatus={setStatus}
         todos={todos} 
         setTodos={setTodos} 
         inputText={inputText}
          setInputText={setInputText}
          setErrorText={setErrorText}
          /> 
          <p className="error">{errorText}</p>
           <ToDoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/> 
        </div>
        

    );
}
export default App;