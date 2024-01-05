import styles from './ToDo.module.css';
import { Task } from './Task'
import { useState } from 'react';



export function ToDo() {
    
    const [newTasks, setTasks] = useState([
        'Teste 1 vapo'
    ])
    

    function CreateNewTasks() {
        event.preventDefault()
        
        const newTaskText = event.target.comment.value

        setTasks([...newTasks, newTaskText]);
    }
    
    
    return (



            <header className={styles.todo}>
                <form  onSubmit={CreateNewTasks} className={styles.newTaskArea}>
                    <div>
                        <textarea name="comment" className={styles.newTask}placeholder='Adicione uma nova tarefa'></textarea>
                    </div>
                    <div className={styles.create}>
                    <   button type="submit">Criar</button> 
                    </div>
                </form>
                <div className={styles.head}>
                    <div className={styles.created}>
                        <p>Tarefas criadas</p>
                        <span>0</span>
                    </div>
                    <div className={styles.finished}>
                        <p>Concluídas</p>
                        <span>0</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {/* <p className={styles.p1}>Você ainda não tem tarefas cadastradas</p>
                    <p className={styles.p2}>Crie tarefas e organize seus itens a fazer</p> */}
                    <div className={styles.task}>
                        
                        {/* <p className={styles.taskText}>teste 123 123</p> */}
                        {newTasks.map(task => {
                            return <Task content={task}/>
                        })}
                    </div>
                </div>  
            </header>
    )
}