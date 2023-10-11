import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteAll, deleteChecked } from "../store/todoSlice";
import { List } from "../components/List/List";
import { Item } from "../components/Item/Item";
import { Input } from "../components/ui/Input/Input";
import { Button } from "../components/ui/Button/Button";
import "./styles/global.css";

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const [inputValue, setInputValue] = useState("");
  const inputHandler = (evt) => {
    setInputValue(evt.target.value);
  };
  const addTodo = () => {
    if (inputValue.trim().length) {
      dispatch(addTask({ text: inputValue }));
      setInputValue("");
    }
  };
  return (
    <div className="conteiner">
      <h1 className="title">ToDo List</h1>
      <div className="form">
        <form onSubmit={(evt) => evt.preventDefault()}>
          <Input
            className="input"
            value={inputValue}
            handler={inputHandler}
            type="text"
            placeholder="Добавить задачу"
          />
          <Button className="button__add" children="Добавить" handler={addTodo} />
        </form>
        {todos.length === 0 ? (
          ""
        ) : (
          <>
            <List>
              {todos.map((todo) => (
                <Item key={todo.id} {...todo} />
              ))}
            </List>
            <div className="buttons">
              <Button
                children="Удалить завершенные"
                className="button__delete-completed"
                handler={() => dispatch(deleteChecked())}
              />
              <Button
                className="button__delete-all"
                children="Удалить все"
                handler={() => dispatch(deleteAll())}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
