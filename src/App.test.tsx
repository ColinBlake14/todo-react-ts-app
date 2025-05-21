import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('ToDo App', () => {
  test('добавляет новую задачу', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/what needs to be done/i);

    await userEvent.type(input, 'Погладить собаку{enter}');
    expect(screen.getByText('Погладить собаку')).toBeInTheDocument();
  });

  test('переключает выполнение задачи', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/what needs to be done/i);

    await userEvent.type(input, 'Выпить кофе{enter}');
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test('фильтрует задачи: Active', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/what needs to be done/i);

    await userEvent.type(input, 'Активная задача{enter}');
    await userEvent.type(input, 'Выполненная задача{enter}');

    const checkboxes = screen.getAllByRole('checkbox');
    await userEvent.click(checkboxes[1]);

    await userEvent.click(screen.getByRole('button', { name: /active/i }));

    expect(screen.getByText('Активная задача')).toBeInTheDocument();
    expect(screen.queryByText('Выполненная задача')).not.toBeInTheDocument();
  });

  test('фильтрует задачи: Completed', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/what needs to be done/i);

    await userEvent.type(input, 'Активная задача{enter}');
    await userEvent.type(input, 'Выполненная задача{enter}');

    const checkboxes = screen.getAllByRole('checkbox');
    await userEvent.click(checkboxes[1]);

    await userEvent.click(screen.getByRole('button', { name: /^Completed$/i }));

    expect(screen.queryByText('Активная задача')).not.toBeInTheDocument();
    expect(screen.getByText('Выполненная задача')).toBeInTheDocument();
  });

  test('очищает выполненные задачи', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/what needs to be done/i);

    await userEvent.type(input, 'Очистить эту задачу{enter}');
    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);

    await userEvent.click(screen.getByRole('button', { name: /clear completed/i }));

    expect(screen.queryByText('Очистить эту задачу')).not.toBeInTheDocument();
  });
});

