import React from 'react';

import Game from './Game';
import TodoList from'./TodoList';

const Page = () => {
  return (
    <div className='container'>
      <Game />
      <TodoList />
    </div>
  )
}

export default Page;