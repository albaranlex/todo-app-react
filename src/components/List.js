import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const List = (props) => {
  const [userInput, setUserInput] = useState("");

  function changeHandle(e) {
    setUserInput(e.target.value);
  }

  function submitHandle(e) {
    e.preventDefault();

    if (userInput.length) {
      props.setList((prevState) => [
        ...prevState,
        { id: uuidv4(), title: userInput.trim(), done: false },
      ]);

      setUserInput("");
    }
  }
  return (
    <div className="form-container">
      <form onSubmit={submitHandle} className="form-input">
        <input
          type="text"
          value={userInput}
          onChange={changeHandle}
          className="input"
          placeholder="Type a task here and click add to list"
        />
        <button className="addButton">+ ADD TO LIST</button>
      </form>
    </div>
  );
};

export default List;
