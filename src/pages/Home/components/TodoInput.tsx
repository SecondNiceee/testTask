import React, { FC, MouseEventHandler, ReactEventHandler, SetStateAction, useState } from "react";
import { TypeTodoItem } from "../model/TypeTodoItem";

interface ITodoInput {
  setTodos: React.Dispatch<SetStateAction<TypeTodoItem[]>>;
}
const TodoInput: FC<ITodoInput> = ({ setTodos }) => {


  const [inputValue,setInputValue] = useState<string>('')
  const addTodo = (value: string) => {
    if (value){
      setTodos((val) => [...val, { name: value, completed: false }]);
    }
  };
  

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if (e.key === "Enter") {
      i
      addTodo(inputValue);
      setInputValue("")
    }
  };

  const buttonClick:MouseEventHandler<HTMLButtonElement> = (e) => {
    addTodo(inputValue);
    setInputValue("")
  };

  return(
    <div className="flex white-shadow rounded-md">
        <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} data-testid = "todo-input" placeholder = {"Нажмите Enter чтобы создать Todo штучку"} className="w-[80%] px-5 py-4" onKeyDown={handleKeyDown} type="text" />
        <button onClick={buttonClick} data-testid="add-button" className=" w-[20%] bg-blue-500 px-5 py-4">Create!</button>
    </div>
  )
};

export default React.memo(TodoInput);
