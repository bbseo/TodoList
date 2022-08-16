import './App.css';
import { createGlobalStyle } from 'styled-components';
import { useRef, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 복습하기',
      done: true
    },
    {
      id: 2,
      text: '놀기',
      done: true
    },
    {
      id: 3,
      text: 'Todo-List 만들어보기',
      done: false
    }
  ]);

  const nextId = useRef(4);
  const onInsert = (text) => {
    const todo = {
      id: nextId.current,
      text,
      done: false,
    };
    setTodos(todos.concat(todo));
    nextId.current++;
  }

  const onRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const onChecked = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo));
  }

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList todos={todos}
                  onRemove={onRemove}
                  onChecked={onChecked} />
        <TodoAdd onInsert={onInsert} />
      </TodoTemplate>
    </>
  );
}

export default App;
