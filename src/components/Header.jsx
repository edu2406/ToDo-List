import styles from './Header.module.css';

import toDoLogo from './Logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={toDoLogo} alt="Logo ToDo List" />
        </header>
    )
}

export default Header;

