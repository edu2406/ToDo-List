import { Trash } from 'phosphor-react';
import Styles from './TaskItem.module.css'

const TaskItem = ({ task, deleteTask, toggleCheck }) => {
    return (
        <li className={Styles.itemsText}>
        <div className={Styles.created}>
            <input
                type="checkbox"
                checked={task.checked}
                onChange={() => toggleCheck(task.taskName)}
            />
            <label className={Styles.inLabel}></label>
            <p className={task.checked ? 'isChecked' : ''}>{task.taskName} </p>
        </div>
        <Trash size={19}className={Styles.trash} onClick={() => deleteTask(task.taskName)} />
    </li>
    )
    
};

export default TaskItem;