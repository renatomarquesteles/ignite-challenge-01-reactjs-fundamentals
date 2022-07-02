import { useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header';
import { Task } from './components/Task';
import styles from './App.module.css';

import './global.css';

export const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      finished: false,
      content: 'Go to gym',
    },
    {
      id: uuidv4(),
      finished: true,
      content: 'Do the homework',
    },
  ]);

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

          {tasks.length && (
            <div className={styles.tasksList}>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  finished={task.finished}
                  content={task.content}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
