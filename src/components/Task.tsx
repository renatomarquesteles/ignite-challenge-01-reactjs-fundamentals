import { Check, Trash } from 'phosphor-react';

import styles from './Task.module.css';

export const Task = () => {
  const finished = false;

  return (
    <div
      className={`${styles.taskContainer} ${
        finished && styles.finishedTaskBorder
      }`}
    >
      <button
        title="Check/Uncheck Task"
        className={finished ? styles.checkedButton : styles.uncheckedButton}
      >
        {finished && <Check weight="bold" size={14} />}
      </button>

      <p className={`${styles.text} ${finished && styles.strikeThroughText}`}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>

      <button title="Delete Task" className={styles.deleteButton}>
        <Trash size={20} />
      </button>
    </div>
  );
};
