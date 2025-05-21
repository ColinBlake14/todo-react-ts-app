import { ListItem, Checkbox, Typography } from '@mui/material';
import { Todo } from '../types/todo';

export default function TodoItem({
  todo,
  onToggle,
}: {
  todo: Todo;
  onToggle: () => void;
}) {
  return (
    <ListItem
      divider
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        opacity: todo.completed ? 0.5 : 1,
      }}
    >
      <Checkbox checked={todo.completed} onChange={onToggle} />
      <Typography
        variant="h6"
        sx={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          wordBreak: 'break-word',
        }}
      >
        {todo.text}
      </Typography>
    </ListItem>
  );
}
