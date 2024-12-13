import styles from './rodape.module.css';
import {ReactComponent as MarcaRegistrada} from 'assets/marca_registrada.svg'
export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada></MarcaRegistrada>
            <p>Desenvolvido Por Igor Terplak 2024</p>
        </footer>
    );
}