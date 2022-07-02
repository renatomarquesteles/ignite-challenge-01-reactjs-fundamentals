import { PlusCircle } from 'phosphor-react';

import { Header } from './components/Header';
import { Task } from './components/Task';
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

        <div>
          <header className={styles.tasksInfo}>
            <div className={styles.tasksInfoWrapper}>
              <span className={styles.tasksCount}>Created Tasks</span>
              <span className={styles.infoCount}>0</span>
            </div>

            <div className={styles.tasksInfoWrapper}>
              <span className={styles.tasksDone}>Done</span>
              <span className={styles.infoCount}>0</span>
            </div>
          </header>

          <div className={styles.tasksList}>
            <Task />
            <Task />
            <Task />
          </div>
        </div>
      </main>
    </div>
  );
};
