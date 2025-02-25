import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AppEntry from '../AppEntry';
import { MemoryRouter } from 'react-router';

test('filter todo items', () => {
  render(
            <AppEntry /> );

  const input = screen.getByTestId('todo-input');
  const addButton = screen.getByTestId('add-button');

  // 5 задач
  const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];
  tasks.forEach(task => {
    fireEvent.change(input, { target: { value: task } });
    fireEvent.click(addButton);
  });

  // Проверяю, что все задачи добавлены
  tasks.forEach(task => {
    expect(screen.getByText(task)).toBeInTheDocument();
  });

  // Выбираю случайное количество задач для завершения
  const numberOfCompletedTasks = Math.floor(Math.random() * 4) + 1;;
  const completedTasks = tasks.slice(0, numberOfCompletedTasks);


  const completeButtons = screen.getAllByTestId('complete-button');
  // Завершаю выбранные задачи
  completedTasks.forEach((e, i) => {
    fireEvent.click(completeButtons[i]);
  });

//   Нахожу и нажимаем фильтр "Выполненные"
  const completedFilterButton = screen.getByTestId('filter-completed-button');
  fireEvent.click(completedFilterButton);

  // Проверяю , что отображаются только выполненные задачи
  expect(screen.getAllByTestId('todo-item')).toHaveLength(numberOfCompletedTasks);

  // Нахожу и нажимаю фильтр "Невыполненные"
  const incompleteFilterButton = screen.getByTestId('filter-incomplete-button');
  fireEvent.click(incompleteFilterButton);

  // Проверяю, что отображаются только невыполненные задачи
  expect(screen.getAllByTestId('todo-item')).toHaveLength(tasks.length - numberOfCompletedTasks);

  // Нахожу и нажимаем фильтр "Все"
  const allFilterButton = screen.getByTestId('filter-all-button');
  fireEvent.click(allFilterButton);

  // Проверяю, что отображаются все задачи
  expect(screen.getAllByTestId('todo-item')).toHaveLength(tasks.length);

});