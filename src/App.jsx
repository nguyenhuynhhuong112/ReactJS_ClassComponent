import { useState } from "react";
import "./App.css";
import TodoList from "./component/TodoList";
import AddTodo from "./component/AddTodo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/add" element={<AddTodo />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
