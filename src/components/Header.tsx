import { TextField } from '@mui/material';
import { useState } from 'react';

export default function Header({ onAdd }: { onAdd: (text: string) => void }) {
  const [value, setValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && value.trim()) {
      onAdd(value.trim());
      setValue('');
    }
  };

  return (
    <TextField
      fullWidth
      placeholder="What needs to be done?"
      value={value}
      onChange={e => setValue(e.target.value)}
      onKeyDown={handleKeyDown}
      variant="standard"
      sx={{ fontSize: 24}}
    />
  );
}
