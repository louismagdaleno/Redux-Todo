import React, { Component } from 'react';


import Title from './components/Title';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <>
     <Title />
     <TodoList />
     </>
    );
  }
}

export default App;
