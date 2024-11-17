import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const App = () => {
 

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Todo App</h1>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App
