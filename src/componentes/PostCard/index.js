import styles from './Posts.module.css';
import {Link} from 'react-router-dom';
import Botao from '../Botao'

export default function PostCard({ post }) {
 
    console.log(post)
    return (
        <Link to={`/posts/${post.id}`}>
        <div className={styles.post}>
            <img 
                className={styles.capa} 
                src={`./fotoPost/${post.id}/capa.png`}  
                alt="imagem de capa do post" 
            />
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <Botao>Ler</Botao>
        </div>
        </Link>
    );
}
