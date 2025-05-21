import { List } from '@mui/material';
import TodoItem from './TodoItem';
import { Todo } from '../types/todo';

export default function TodoList({
  todos,
  onToggle,
}: {
  todos: Todo[];
  onToggle: (id: number) => void;
}) {
  return (
    <List>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={() => onToggle(todo.id)} />
      ))}
    </List>
  );
}
