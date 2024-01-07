import Styles from './Stats.module.css'

const Stats = ({ toDoList }) => {
    console.log(toDoList)

    let countList = toDoList.length;
    return (
        <div className={Styles.head}>
            <div className={Styles.created}>    
                <p>
                    Tarefas criadas
                </p>
                <div className={Styles.createdNum}>{countList === 0 ? `${countList}` : `${countList}`}</div>
            </div>
            <div className={Styles.finished}>
                <p>
                    Concluídas
                </p>
                <div className={Styles.finishedNum}>{countList === 0 ? `${countList}` : `${countList}`}</div>
            </div>
        </div>


    )


}

export default Stats;