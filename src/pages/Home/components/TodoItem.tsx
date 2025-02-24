import React, { FC, SetStateAction, useCallback } from "react";
import { TypeTodoItem } from "../model/TypeTodoItem";

interface ITodoItem {
  todo: TypeTodoItem;
  todoIndex: number;
  setTodos: React.Dispatch<SetStateAction<TypeTodoItem[]>>;
}
const TodoItem: FC<ITodoItem> = ({ todo, todoIndex, setTodos }) => {
  const setTodo = useCallback(() => {
    setTodos((value) => value.map( (todo, index) => index === todoIndex ? {...todo, completed : !todo.completed} : todo ));
  }, [setTodos, todoIndex]);
  return (
    <div onClick={setTodo} className="flex  p-4 items-center border-solid border-black border-2 rounded-lg cursor-pointer">
      <div className="flex gap-5 items-center">
        <div className="w-[50px] h-[50px] rounded-[100%] border border-solid border-black flex justify-center items-center">
          <p
            className={`h4 text-green-500 ${
              todo.completed ? "block" : "hidden"
            }`}
          >
            ✔
          </p>
        </div>
        <p className={`p ${todo.completed ? "line-through" : ""}`}>{todo.name}</p>
      </div>
    </div>
  );
};

export default React.memo(TodoItem);
