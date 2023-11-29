import { useEffect, useState } from 'react'
import './TodoList.scss';
const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const url = "https://jsonplaceholder.typicode.com/todos"
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setTodos(json);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchData();
    },[])
    return (
        <div className='todo-list-container'>
            <h1>TodoList</h1>
            {loading && <p className='loading-message'>Loading ..</p>}
            {error && <p className='error-message'>Error: {error.message }</p>}
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
  )
}

export default TodoList