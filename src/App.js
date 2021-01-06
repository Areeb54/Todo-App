//import { findAllByPlaceholderText } from "@testing-library/react";
import React, { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

export default function TodoApp() {
  /*const [todos, setTodos] = useState([
    "This is a item",
    "This is a second item",
  ]);*/

  const [input, setInput] = useState("");

  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    /* let todo = {
      id: Math.random(),
      text: input,
      completed: false,
    };*/
    "input ";
    setTodos((oldtodos) => {
      return [...oldtodos, input];
    });
    setInput("");
  };

  const DeleteItem = (id) => {
    setTodos((olditems) => {
      return olditems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="header">
        <h1>Todo App</h1>
      </div>
      <div className="header">
        <div>
          <form className="addTodo" onSubmit={(e) => e.preventDefault()}>
            <input
              className="placeholder"
              type="text"
              placeholder="Add an item"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button type="submit" onClick={addTodo} className="button">
              Add todo
            </button>
          </form>
          <ol>
            {/*{todos}*/}
            {todos.map((itemval, index) => {
              return (
                <TodoList
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={DeleteItem}
                />
              );
            })}
          </ol>
        </div>
        {/*{todos.map((item) => (
          <div>{item}</div>
        ))}*/}
      </div>
    </>
  );
}
