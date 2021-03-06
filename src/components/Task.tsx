import { Check, Trash } from 'phosphor-react';

import styles from './Task.module.css';

interface TaskProps {
  finished: boolean;
  content: string;
  deleteTask: () => void;
  switchTaskStatus: () => void;
}

export const Task = ({
  finished,
  content,
  deleteTask,
  switchTaskStatus,
}: TaskProps) => {
  return (
    <div
      className={`${styles.taskContainer} ${
        finished && styles.finishedTaskBorder
      }`}
    >
      <button
        title="Check/Uncheck Task"
        className={finished ? styles.checkedButton : styles.uncheckedButton}
        onClick={switchTaskStatus}
      >
        {finished && <Check weight="bold" size={14} />}
      </button>

      <p className={`${styles.text} ${finished && styles.strikeThroughText}`}>
        {content}
      </p>

      <button
        title="Delete Task"
        className={styles.deleteButton}
        onClick={deleteTask}
      >
        <Trash size={20} />
      </button>
    </div>
  );
};
