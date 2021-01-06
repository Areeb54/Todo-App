import React from "react";
import "./App.css";

function TodoList(props) {
  return (
    <div>
      <li>
        <em>
          <strong className="oll"> {props.text} </strong>
          {/*<input type="checkbox" checked={true} />*/}
        </em>{" "}
        <button
          className="bstyle"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          delete todo
        </button>
      </li>
    </div>
  );
}

export default TodoList;
