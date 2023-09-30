import { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import "./style.css";
import { TodoList } from "./TodoList";

export default function App() { 
  const [todos, setTodos] = useState(() => { 
    const localValue = localStorage.getItem("TODO_ITEMS")

    return !localValue ? [] : JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("TODO_ITEMS", JSON.stringify(todos));
  }, [todos])

  const addTodo = (newItem) => {
      setTodos((currentTodos) => { 
      
      if (newItem === '' ||
        currentTodos.findIndex(e => e.title === newItem) >= 0) {
          return currentTodos;
      }

      return [
        ...currentTodos,
          { id: crypto.randomUUID(), title: newItem, completed: false }
        ]
    })
  }

  const toggleTodo = (id, completed) => { 
    setTodos(currentTodos => { 
      return currentTodos.map(todo => { 
        if (id === todo.id) return { ...todo, completed}
        
        return todo
      })
    }

    );
  }

  const deleteTodo = (id) => {
    setTodos(currentTodos => { 
      return currentTodos.filter(val => val.id !== id)
    })
  }

  return (
    <>
      <AddTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}
