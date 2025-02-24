import { FC, useMemo } from 'react';
import { TypeTodoFilter } from '../model/TypeTodoFilter';
import { TypeTodoItem } from '../model/TypeTodoItem';

interface IUseFilterTodos{
    filter : TypeTodoFilter,
    todos : TypeTodoItem[]
}
const useFilterTodos= ({filter, todos} : IUseFilterTodos) => {
    const filteredTodos = useMemo( () => {
        switch(filter){
            case "completed":{
                return [...todos].filter((todo) => todo.completed)
            }
            case "active" : {
                return [...todos].filter((todo) => !todo.completed)
            }
            case "all" : {
                return todos
            }
        }
    } , [filter, todos] )
    return filteredTodos
};

export default useFilterTodos;