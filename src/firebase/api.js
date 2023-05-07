import { db } from './index';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';

// const TODO = {
//   text: 'string',
//   date: 'Date',
//   isChecked: 'boolean',
// };

const collectionRef = collection(db, 'todos');

export const createTodo = async (text) => {
  await addDoc(collectionRef, {
    text: text,
    isChecked: false,
    date: Date.now(),
  });
};

export const getAllTodos = async () => {
  let array = [];
  const todos = await getDocs(collectionRef);
  todos.forEach((doc) => {
    let todo = {
      id: doc.id,
      ...doc.data(),
    };
    array.push(todo);
  });
  return array;
};

export const updateTodo = async (id, text, checked) => {
  const todoRef = doc(db, 'todos', id);
  await updateDoc(todoRef, {
    text: text,
    isChecked: checked,
  });
};

export const deleteTodo = async (id) => {
  const todoRef = doc(db, 'todos', id);
  await deleteDoc(todoRef);
};
