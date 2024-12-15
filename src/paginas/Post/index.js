import './post.css';
import styles from './Post.module.css';
import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import NotFound from 'paginas/NotFound';
import PostCard from 'componentes/PostCard';


export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => post.id === Number(parametros.id));
    const postsRecomendados = posts
        .filter((p) => p.id !== Number(parametros.id)) // Corrigido: exclui o post atual
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    if (!post) {
        return <NotFound />;
    }

    return (
        <PostModelo
            fotoCapa={`../../assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
            </div>
            <h2 className={styles.tituloOutrosPosts}>
                Outros posts que você pode gostar:
            </h2>
            <ul className={styles.postsRecomendados}>
                {postsRecomendados.map((p) => (
                    <li key={p.id}>
                        <PostCard post={p} />
                    </li>
                ))}
            </ul>
        </PostModelo>
    );
}
