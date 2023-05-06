import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import { createTodo, getAllTodos, updateTodo } from './firebase/api';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function App() {
  const [todos, setTodos] = useState();

  const getTodos = () => {
    getAllTodos().then((e) => {
      setTodos(e);
    });
  };
  const invia = () => {
    createTodo('ciaoaa');
    getTodos();
  };

  useEffect(() => {
    getTodos();
  }, []);

  const todoSortedByDateAndCompleted = () => {
    if (!todos) return [];
    const arrSort = [
      ...todos
        .sort((a, b) => b.date - a.date)
        .sort((a, b) => a.isChecked - b.isChecked),
    ];
    return arrSort;
  };
  console.log(todos);

  return (
    <>
      <div className='App'>
        <Header />
        {todoSortedByDateAndCompleted().map((it) => {
          return <p>{it.text}</p>;
        })}
        <div className='add_btn'>
          <IconButton
            onClick={invia}
            size='large'
            sx={{
              bgcolor: '#dedede6a',
              '&:hover': { bgcolor: '#dedede6a' },
              color: 'black',
            }}
          >
            <AddIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default App;
