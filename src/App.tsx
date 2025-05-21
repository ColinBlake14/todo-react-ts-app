import { Container, Paper, Typography } from '@mui/material';
import Header from './components/Header';
import TodoList from './components/ToloList';
import Footer from './components/Footer';
import { useTodos } from './hooks/useTodos';
import { useState } from 'react';

export default function App() {
  const { todos, addTodo, toggleTodo, clearCompleted } = useTodos();
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const filtered = todos.filter(todo =>
    filter === 'active'
      ? !todo.completed
      : filter === 'completed'
        ? todo.completed
        : true
  );

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h2" align="center" sx={{ color: '#c6c2c2', mb: 2 }}>
        todos
      </Typography>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Header onAdd={addTodo} />
        <TodoList todos={filtered} onToggle={toggleTodo} />
        <Footer
          count={todos.filter(t => !t.completed).length}
          filter={filter}
          setFilter={setFilter}
          onClearCompleted={clearCompleted}
        />
      </Paper>
    </Container>
  );
}
