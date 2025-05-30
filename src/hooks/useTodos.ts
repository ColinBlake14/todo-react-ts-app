import { useState } from 'react';
import { Todo } from '../types/todo';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) =>
    setTodos([...todos, { id: Date.now(), text, completed: false }]);

  const toggleTodo = (id: number) =>
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));

  const clearCompleted = () =>
    setTodos(todos.filter(todo => !todo.completed));

  return {
    todos,
    addTodo,
    toggleTodo,
    clearCompleted,
  };
}
