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
            <p id={task.checked ? 'Styles.teste' : ''}>{task.taskName} </p>
        </div>
        <div className={Styles.trashDiv}><Trash size={19}className={Styles.trash} onClick={() => deleteTask(task.taskName)} /></div>
    </li>
    )
    
};

export default TaskItem;    