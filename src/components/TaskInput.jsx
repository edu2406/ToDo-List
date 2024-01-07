import { useState } from "react";
import styles from './TaskInput.module.css';
import { PlusCircle } from 'phosphor-react';

const TaskInput = ({addTask}) => {
    const [task, setTask] = useState('');

    function handleInputValue(event) {
        setTask(event.target.value);
    }

    function handleAddTask(event) {
        event.preventDefault();
        if(task.trim()==='') return;
        addTask(task);
        setTask('');
    }
    
    return (
        <form  className={styles.newTaskArea} onSubmit={handleAddTask}>
            <input className={styles.newTask} type="text" value={task} placeholder="Adicione uma nova tarefa" onChange={handleInputValue}/>
            <button>Criar <PlusCircle size={20} className={styles.image}/></button>
        </form>
    )
};

export default TaskInput;