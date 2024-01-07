import { Trash } from 'phosphor-react';
import Styles from './TaskItem.module.css'

const TaskItem = ({ task, deleteTask, toggleCheck }) => {
    return (
        <li className={Styles.itemsText} onClick={() => toggleCheck(task.taskName)}>
        <label className={Styles.created}>
            <input
                type="checkbox"
                checked={task.checked}
                
            />
            <span className={Styles.check} onClick={() => toggleCheck(task.taskName)}></span>
            <p id={task.checked ? Styles.teste : ''}>{task.taskName} </p>
        </label>
        <div className={Styles.trashDiv}><Trash size={19}className={Styles.trash} onClick={() => deleteTask(task.taskName)} /></div>
    </li>
    )
    
};

export default TaskItem;    