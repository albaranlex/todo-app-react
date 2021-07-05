import React, { useState } from "react";
import List from "./components/List";
import ToDos from "./components/Todo";
import Header from "./components/Header";

function App() {
  const [list, setList] = useState([]);
  const remove = (itemToRemove) => {
    const newArr = list.filter((item) => item.id !== itemToRemove);
    setList(newArr);
  };

  const check = (itemToCheck) => {
    setList((prevState) => {
      return prevState.filter((item) => {
        if (item.id === itemToCheck) {
          item.done = !item.done;
        }
        return item;
      });
    });
  };

  return (
    <div className="App">
      <Header />
      <List setList={setList} />
      <ToDos list={list} remove={remove} check={check} />
    </div>
  );
}

export default App;
