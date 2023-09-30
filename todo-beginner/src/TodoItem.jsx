/* eslint-disable react/prop-types */
export const TodoItem = ({ id, title, completed, toggleTodo, deleteTodo }) => {
    return (
        <li>
            <label>
                <input
                id={ `chk-todo-${id}` }
                type="checkbox"
                checked={completed}
                onChange={e => toggleTodo(id, e.target.checked)}
                />
            {title}
            </label>
            <button
                onClick={() => { deleteTodo(id)}}
                className="btn btn-danger">Delete</button>
        </li>
    )
};