import { MdDeleteForever } from "react-icons/md";

const ToDos = (props) => {
  const userTodos = props.list.map((toDo, i) => (
    <div className="li-container">
      <li key={i} className="listItem">
        {toDo.title}
      </li>
      <i
        onClick={() => {
          props.remove(toDo.id);
        }}
      >
        <MdDeleteForever />
      </i>
    </div>
  ));
  return (
    <div className="todo-container">
      <ul>{userTodos}</ul>
    </div>
  );
};

export default ToDos;
