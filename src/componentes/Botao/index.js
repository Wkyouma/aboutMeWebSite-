import styles from './Botao.module.css'

export default function Botao({ children, tamanho }) {
    return(
    <button className= {`${styles.botaoLer} ${styles[tamanho]}`}>{children}</button>)

}