import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AppEntry from '../AppEntry';
import { MemoryRouter } from 'react-router';


// Это тест для проверку очистки всех выполненных
test('clear completed todo items', () => {
  if (typeof TextEncoder === 'undefined') {
    global.TextEncoder = require('util').TextEncoder;
  }
  render(
      <AppEntry />);

  // Нахожу элементы для добавления
  const input = screen.getByTestId('todo-input');
  const addButton = screen.getByTestId('add-button');

  // Добавляю две задачи
  fireEvent.change(input, { target: { value: 'Task 1' } });
  fireEvent.click(addButton);
  fireEvent.change(input, { target: { value: 'Task 2' } });
  fireEvent.click(addButton);

  // Проверяю, что задачи добавлены
  expect(screen.getByText('Task 1')).toBeInTheDocument();
  expect(screen.getByText('Task 2')).toBeInTheDocument();

  // Нахожу и нажимаю кнопки завершения для каждой задачи
  const completeButtons = screen.getAllByTestId('complete-button');
  fireEvent.click(completeButtons[0]);
  fireEvent.click(completeButtons[1]);

  // Нахожу и нажимаю кнопку очистки завершенных задач
  const clearCompletedButton = screen.getByTestId('clear-completed-button');
  fireEvent.click(clearCompletedButton);

  expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
  expect(screen.queryByText('Task 2')).not.toBeInTheDocument();
});