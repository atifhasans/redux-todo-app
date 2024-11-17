import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../config/redux/reducers/todoSlice';

const TodoInput = () => {
    const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo"
        style={{ padding: '10px', marginRight: '10px', width: '300px' }}
      />
      <button onClick={handleAddTodo} style={{ padding: '10px 20px' }}>
        Add
      </button>
    </div>
  )
}

export default TodoInput