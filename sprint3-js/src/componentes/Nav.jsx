import {  } from 'react'
import{Link} from 'react-router-dom'
import styles from '../css/Nav.module.css'

function Nav(){
    return(
        <section className={styles.nav}>
            <Link to="home" className={styles.link}>Home</Link>
            <Link to="publicacoes" className={styles.link}>Publicacoes</Link>
            <Link to="login" className={styles.link}>Login</Link>
        </section>
        );
}
export default Nav;