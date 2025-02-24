import React, { FC, SetStateAction } from "react";
import { TypeTodoItem } from "../model/TypeTodoItem";

interface ITodoInput {
  setTodos: React.Dispatch<SetStateAction<TypeTodoItem[]>>;
}
const TodoInput: FC<ITodoInput> = ({ setTodos }) => {
  const addTodo = (value: string) => {
    setTodos((val) => [...val, { name: value, completed: false }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;
    if (e.key === "Enter") {
      addTodo(value);
      (e.target as HTMLInputElement).value = "";
    }
  };

  return(
    <div className="flex white-shadow rounded-md">
        <input placeholder = {"Нажмите Enter чтобы создать Todo штучку"} className="w-[80%] h-[100%] px-5 py-4" onKeyDown={handleKeyDown} type="text" />
        <button className="h-[100%] w-[20%] bg-blue-500 px-5 py-4">Create!</button>
    </div>
  )
};

export default React.memo(TodoInput);
