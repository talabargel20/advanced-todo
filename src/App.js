import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  
  const [newTodo, setNewTodo] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [categories, setCategories] = useState(['עבודה', 'אישי', 'קניות']);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('regular');

  // מילון תרגום לרמות עדיפות
  const priorityTranslations = {
    'regular': 'רגילה',
    'high': 'גבוהה',
    'low': 'נמוכה'
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: newTodo,
        completed: false,
        category: selectedCategory === 'all' ? 'אישי' : selectedCategory,
        dueDate: dueDate,
        priority: priority,
        priorityDisplay: priorityTranslations[priority] // שמירת הערך המתורגם
      }]);
      setNewTodo('');
      setSelectedCategory('all');
      setDueDate('');
      setPriority('regular');
    }
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const filteredTodos = todos
    .filter(todo => todo.text.includes(searchTerm))
    .filter(todo => {
      if (selectedCategory !== 'all' && todo.category !== selectedCategory) {
        return false;
      }
      if (filter === 'completed') return todo.completed;
      if (filter === 'active') return !todo.completed;
      return true;
    });

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={newTodo} 
          onChange={handleInputChange} 
          placeholder="הוסף משימה חדשה"
        />
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="all">כל הקטגוריות</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="regular">רגילה</option>
          <option value="high">גבוהה</option>
          <option value="low">נמוכה</option>
        </select>
        <button type="submit">הוסף</button>
      </form>

      <div className="filters">
        <input 
          type="text" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="חפש משימות"
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">הכל</option>
          <option value="completed">הושלם</option>
          <option value="active">פעיל</option>
        </select>
      </div>

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <div className={`todo-content ${todo.completed ? 'completed' : ''}`}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              <span>{todo.text}</span>
              <span>({todo.category})</span>
              {todo.dueDate && <span>| תאריך יעד: {todo.dueDate}</span>}
              {todo.priority !== 'regular' && <span>| דחיפות: {todo.priorityDisplay}</span>}
            </div>
            <button onClick={() => handleDelete(todo.id)}>מחק</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;