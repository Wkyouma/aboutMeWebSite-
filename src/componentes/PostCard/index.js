import styles from './Posts.module.css';
import {Link} from 'react-router-dom';

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
            <button className={styles.botaoLer}>Ler</button>
        </div>
        </Link>
    );
}
