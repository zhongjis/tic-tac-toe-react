import React from 'react';

// const itemFinished = [];

const TodoListBody = (props) => {
  const rows = props.listTodo.map((row, index) => {
    for (const completed of props.completed) {
      if (completed === index) {
        return <li key={index}><s>{row}</s></li>;
      }
    }
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

  // add key of the finished item here to strike them out
  const completed = [];
  
  return (
    <div className='todo-list'>
      <h2>TODO</h2>
      <ol>
        <TodoListBody listTodo={listTodo} completed={completed} />
      </ol>
    </div>
  );
};

export default TodoList;