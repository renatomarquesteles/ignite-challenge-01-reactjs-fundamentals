import { PlusCircle } from 'phosphor-react';

import { Header } from './components/Header';
import styles from './App.module.css';

import './global.css';

export const App = () => {
  return (
    <div>
      <Header />

      <main className={styles.content}>
        <form className={styles.newTaskForm}>
          <input type="text" placeholder="Add a new task" />
          <button type="submit">
            Create <PlusCircle size={20} />
          </button>
        </form>
      </main>
    </div>
  );
};
