
import postsData from 'json/posts.json'; // Renomeando a importação do JSON
import styles from './inicio.module.css';
import Post from '../../componentes/PostCard/index.js';

export default function Inicio() {
    return (
      
         

            <ul className={styles.postss}>
                {postsData.map((post) => { // Renomeando a variável para 'post'
                    return <li key={post.id}><Post post={post} /></li>;
                })}
            </ul>
        
    );
}
