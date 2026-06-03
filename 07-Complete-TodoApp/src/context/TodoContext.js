    import { createContext, useContext } from "react";

    export const TodoContext = createContext({
        todos:[
            {
                id:1,
                todo:"todo msg",
                completed:false
            }
        ],
        addTodo: (todo)=>{},
        updateTodo:(id,newtodo)=>{},
        deleteTodo:(id)=>{},
        toggleComplete:(id)=>{}
    })

    export const TodoProvier = TodoContext.Provider

    export const useTodo = ()=>{
        return useContext(TodoContext)
    }
