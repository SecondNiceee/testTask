import React, { FC, SetStateAction } from 'react';
import { TypeTodoFilter } from '../model/TypeTodoFilter';

interface ITodoFilter{
    todoFilter : TypeTodoFilter,
    setTodoFilter : React.Dispatch<SetStateAction<TypeTodoFilter>>
}
const TodoFilters:FC<ITodoFilter> = ({setTodoFilter, todoFilter}) => {
    const changeTodoFilter = (filter : TypeTodoFilter) => () => {
        setTodoFilter(filter)
    }
    return (
        <div className='flex gap-2 items-center'>
        <div onClick={changeTodoFilter("all")}  className={`flex rounded-sm px-3 border-black border-solid py-2 ${todoFilter === "all" && 'border-2'}`}>
            <button className='p'>All</button>  
        </div>
        <div onClick={changeTodoFilter("active")} className={`flex rounded-sm px-3 py-2 ${todoFilter === "active" && 'border-2'}`}>
            <button className='p'>Active</button>  
        </div>
        <div onClick={changeTodoFilter("completed")} className={`flex rounded-sm px-3 py-2 ${todoFilter === "completed" && 'border-2'}`}>
            <button className='p'>Completed</button>  
        </div>
    </div>
    );
};

export default TodoFilters;