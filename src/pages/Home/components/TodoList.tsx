import {  useMemo, useState } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';
import TodoFilters from './TodoFilters';
import EmptyNotation from './EmptyNotation';
import useFilterTodos from '../hooks/useFilterTodos';
import { TypeTodoFilter } from '../model/TypeTodoFilter';
import { TypeTodoItem } from '../model/TypeTodoItem';

const TodoList= () => {
    const [todos, setTodos] = useState<TypeTodoItem[]>([])

    const [todoFilter, setTodoFilter] = useState<TypeTodoFilter>("all")

    const activeTodos = useMemo( () => {
        return [...todos.filter((todo) => !todo.completed)].length
    } , [todos])

    const filteredTodos = useFilterTodos({filter : todoFilter, todos : todos})

    const clearCompleted = () => {
        setTodos([...todos].filter((todo) => !todo.completed))
    }

    return (
            <div className='flex flex-col w-[100%] max-w-[800px] gap-5 mx-auto'>
                <TodoInput setTodos={setTodos}/>
                <div className='flex flex-col gap-2 w-[100%] white-shadow rounded-lg'>
                    {
                       filteredTodos.length ? filteredTodos.map( (todo, i) => <TodoItem setTodos={setTodos} todoIndex = {i} todo={todo} /> ) : 
                        <EmptyNotation />
                    }
                </div>
                <div className='flex w-[100%] justify-between items-center'>
                    <p className='p'>{activeTodos} item(s) left</p>

                    <TodoFilters setTodoFilter={setTodoFilter} todoFilter={todoFilter} />

                    <button onClick={clearCompleted} className='p'>Clear completed</button>
                </div>
            </div>       
    );
};

export default TodoList;