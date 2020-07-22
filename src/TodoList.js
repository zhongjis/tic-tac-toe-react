import React from 'react';

// const itemFinished = [];

const TodoListBody = (props) => {
  const rows = props.listTodo.map((row, index) => {
    return (
      <li key={index}>{row}</li>
    )
  })

  return rows;
}

const TodoList = (props) => {
  const listTodo = [
    "Display the location for each move in the format (col, row) in the move history list.",
    "Bold the currently selected item in the move list.",
    "Rewrite Board to use two loops to make the squares instead of hardcoding them.",
    "Add a toggle button that lets you sort the moves in either ascending or descending order.",
    "When someone wins, highlight the three squares that caused the win.",
    "When no one wins, display a message about the result being a draw.",
  ];
  
  return (
    <div className='todo-list'>
      <h2>TODO</h2>
      <ol>
        <TodoListBody listTodo={listTodo} />
      </ol>
    </div>
  );
};

export default TodoList;