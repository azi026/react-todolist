import React from 'react';

const Form=({todos,setInputText,setTodos,inputText,setStatus,setErrorText})=>{

    const inputTextHandeler=(e)=>{
        console.log(e.target.value);
        setInputText(e.target.value);
    }
    const submitTodoHandeler=(e)=>{
    e.preventDefault();
    if(inputText){
        setTodos([
            ...todos,{text:inputText,completed:false,id:Date.now()}
        ])
        setInputText("");
        setErrorText("");
        }
        else{
            setErrorText("Please Enter Task ...")
        }
    }
    
   
    const statusHandler=(e)=>{
        setStatus(e.target.value)

    }
    return(
        <form>
            <input value={inputText} onChange={inputTextHandeler} type="text" className="todo-input"></input>
            <button onClick={submitTodoHandeler} className="todo-button" type="sumit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select  onChange={statusHandler}name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncomplete</option>
                </select>
            </div>
        </form>
    );
}
export default Form;