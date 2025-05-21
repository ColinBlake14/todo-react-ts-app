import { Button, ButtonGroup, Typography, Box } from '@mui/material';

type Filter = 'all' | 'active' | 'completed';

export default function Footer({
  count,
  filter,
  setFilter,
  onClearCompleted,
}: {
  count: number;
  filter: Filter;
  setFilter: (f: Filter) => void;
  onClearCompleted: () => void;
}) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", mt: 2 }}>
      <Typography variant="body2">{count} {count > 1 ? 'items' : 'item'} left</Typography>
      <ButtonGroup variant="outlined" size="small">
        {(['all', 'active', 'completed'] as Filter[]).map(f => (
          <Button
            key={f}
            size='small'
            variant={filter === f ? 'contained' : 'outlined'}
            onClick={() => setFilter(f)}
          >
            {f[0].toUpperCase() + f.slice(1)}
          </Button>
        ))}
      </ButtonGroup>
      <Button size="small" onClick={onClearCompleted}>
        Clear completed
      </Button>
    </Box>
  );
}
