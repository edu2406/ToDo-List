import Header from './components/Header';
import './global.css';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';
import { useState } from 'react';
import Stats from './components/Stats';
import Styles from './App.module.css'
import clipboard from './Clipboard.svg'

function App() {
  const [toDoLists, setToDoLists] = useState();

  const todoList = {
    description: String,
    isChecked: boolean
  }

  const addTask = (taskName) => {
    const newTask = { taskName, checked: false }
    setToDoList([...toDoList, newTask])
  };

  function deleteTask(deleteTaskName) {
    setToDoList(toDoList.filter(task => task.taskName !== deleteTaskName))
  }

  function toggleCheck(taskName) {
    setToDoList((prevToDoList) => prevToDoList.map(task => task.taskName === taskName ? { ...task, checked: !task.checked } : task)
    )
  }

  return (
    <div>
      <Header />

      <TaskInput addTask={addTask} />

      <div className={Styles.main}>
        <Stats toDoList={toDoList} />

        <div className={Styles.toDoList}>
          <ul className={Styles.listItems}>
            {toDoList.map((task, key) => (
              <TaskItem task={task} key={key} deleteTask={deleteTask} toggleCheck={toggleCheck} />
            ))}
          </ul>

          {toDoList.length === 0 ? (
            
            <div>
              <img src={clipboard} alt="" />
              <p className={Styles.p1}>Você ainda não tem tarefas cadastradas</p> <p className={Styles.p2}>Crie tarefas e organize seus itens a fazer</p>
            </div>
          ) : null}

        </div>

      </div>



    </div>
  )
}

export default App
