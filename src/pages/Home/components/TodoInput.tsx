import React, { FC, SetStateAction } from "react";
import { TypeTodoItem } from "../../model/TypeTodoItem";

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

  return <input className="white-shadow px-5 py-4 rounded-md" onKeyDown={handleKeyDown} type="text" />;
};

export default React.memo(TodoInput);
