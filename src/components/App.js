import React from "react";
import Footer from "./Footer";
import DataDisplay from "./DataDisplay";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    ---------------------------
    <DataDisplay />
  </div>
);

export default App;
