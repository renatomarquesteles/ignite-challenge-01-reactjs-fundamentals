import { useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header';
import { Task } from './components/Task';
import styles from './App.module.css';

import './global.css';

interface Task {
  id: string;
  finished: boolean;
  content: string;
}

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
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

  const switchTaskStatus = (taskId: string) => {
    setTasks((state) =>
      state.reduce<Task[]>((newTasks, currentTask) => {
        if (currentTask.id === taskId) {
          return [
            ...newTasks,
            {
              ...currentTask,
              finished: !currentTask.finished,
            },
          ];
        }
        return [...newTasks, currentTask];
      }, [])
    );
  };

  const deleteTask = (taskId: string) => {
    setTasks((state) => state.filter((task) => task.id !== taskId));
  };

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

          {!!tasks.length && (
            <div className={styles.tasksList}>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  finished={task.finished}
                  content={task.content}
                  switchTaskStatus={() => switchTaskStatus(task.id)}
                  deleteTask={() => deleteTask(task.id)}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
