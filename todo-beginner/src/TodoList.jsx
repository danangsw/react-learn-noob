import { TodoItem } from "./TodoItem";

/* eslint-disable react/prop-types */
export const TodoList = ({ todos, toggleTodo, deleteTodo}) => { 
    return (
        <ul className="list">
        {todos?.length == 0 && <p>No Items</p>}
        {todos?.map(todo => {
            return (
                <TodoItem
                    {...todo}
                    key={todo.id}
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}
                />
            )}
        )}
        </ul>
    )
};