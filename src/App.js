import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from './firebase/api';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import AddToDoForm from './components/AddToDoForm';
import Todo from './components/Todo';

function App() {
  const [todos, setTodos] = useState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getTodos = () => {
    getAllTodos().then((e) => {
      setTodos(e);
    });
  };
  const saveTodo = (text) => {
    createTodo(text).then(() => getTodos());
  };

  const updateCheck = (id, text, checked) => {
    updateTodo(id, text, checked).then(() => getTodos());
  };

  const removeCheckedTodo = () => {
    todos.forEach((todo) => {
      if (todo.isChecked) deleteTodo(todo.id).then(() => getTodos());
    });
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
  // console.log(todos);

  return (
    <>
      <div className='App'>
        <Header />
        <AddToDoForm
          open={open}
          handleClose={handleClose}
          saveTodo={saveTodo}
        />
        <div className='todos_div'>
          {todoSortedByDateAndCompleted().map((it) => {
            return (
              <Todo
                key={it.id}
                id={it.id}
                text={it.text}
                isChecked={it.isChecked}
                updateCheck={updateCheck}
              />
            );
          })}
        </div>
        <div className='add_btn'>
          <IconButton
            onClick={() => handleOpen()}
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
        <div className='remove_btn'>
          <IconButton
            onClick={() => removeCheckedTodo()}
            size='large'
            sx={{
              bgcolor: '#dedede6a',
              '&:hover': { bgcolor: '#dedede6a' },
              color: 'black',
            }}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default App;
