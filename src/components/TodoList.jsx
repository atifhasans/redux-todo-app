import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo, toggleTodo } from '../config/redux/reducers/todoSlice';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [editingId, setEditingId] = useState(null);
    const [editText, setEditText] = useState('');

    const handleEdit = (todo) => {
        setEditingId(todo.id);
        setEditText(todo.text);
      };
    
      const handleSave = (id) => {
        dispatch(editTodo({ id, text: editText }));
        setEditingId(null);
      };

  return (
    <div style={{ marginTop: '20px' }}>
      {todos.length > 0 ? (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '10px',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                width: '400px',
                margin: '0 auto',
              }}
            >
              {editingId === todo.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  style={{ flex: 1, marginRight: '10px', padding: '5px' }}
                />
              ) : (
                <span
                  onClick={() => dispatch(toggleTodo(todo.id))}
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                    flex: 1,
                  }}
                >
                  {todo.text}
                </span>
              )}

              {editingId === todo.id ? (
                <button
                  onClick={() => handleSave(todo.id)}
                  style={{ padding: '5px 10px', color: 'green' }}
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo)}
                  style={{ padding: '5px 10px', color: 'blue' }}
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                style={{ padding: '5px 10px', color: 'red' }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No todos found. Add some!</p>
      )}
    </div>
  )
}

export default TodoList