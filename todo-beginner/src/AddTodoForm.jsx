/* eslint-disable react/prop-types */
import { useState } from "react";

const AddTodoForm = ({ onSubmit }) => {
    const [newItem, setNewItem] = useState("")
    const handleSubmit = (e) => { 
        e.preventDefault()
        
        onSubmit(newItem)
        
        setNewItem("")
    }
    
    return (
        <form
            onSubmit={handleSubmit}
            className="new-item-form">
            <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input
                value={newItem}
                onChange={e => setNewItem(e.target.value)}
                type="text"
                id="item" />
            </div>
            <button className="btn">Add</button>
        </form>
    );
};

export default AddTodoForm;