import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import AppEntry from '../AppEntry';


test('add todo item', () => {

  render(
        <AppEntry />);
  // Нахожу элементы
  const input = screen.getByTestId('todo-input');
  const button = screen.getByTestId('add-button');

  // Симулирую ввод текста и нажатие кнопки
  fireEvent.change(input, { target: { value: 'Existing Task' } });
  fireEvent.click(button);

  // Проверяю, что элемент добавлен в список
  expect(screen.getByText('Existing Task')).toBeInTheDocument();
});