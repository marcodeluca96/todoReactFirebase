import './App.css';
import { db } from './firebase/index';
import { ref, set, onValue, get, child } from 'firebase/database';

function App() {
  const invia = (e: any) => {
    e.preventDefault();
    // setta i dati nel database passandoli il ref con l'url e l'oggetto
    set(ref(db, 'todos/' + e.target.testo.value), {
      testo: e.target.testo.value,
      data: Date.now(),
    });
  };

  // mettersi in ascolto dell'oggetto ad ogni cambiamento
  const todo1Ref = ref(db, 'todos/todo1');
  onValue(todo1Ref, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });

  // leggere i dati una volta
  get(child(ref(db), `todos/todo1`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div className='App'>
      <form name='todo' action='' method='post' onSubmit={invia}>
        <input name='testo' type='text' />
        <button type='submit'>INSERISCI</button>
      </form>
    </div>
  );
}

export default App;
