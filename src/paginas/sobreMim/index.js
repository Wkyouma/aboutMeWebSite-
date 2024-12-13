import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_fotos.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Igor!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Igor Terplak Gutierrez sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou estudante de Ciência da Computação no 4º semestre da PUCPR e estou muito animado por compartilhar um pouco sobre mim.
            </p>
            <p className={styles.paragrafo}>
                Minha história com tecnologia começou com curiosidade em entender como os computadores funcionam. Trabalhei como menor aprendiz na DBM Contact Center, onde tive a oportunidade de atuar com suporte de TI, realizando formatações de computadores e atendendo usuários. Essa experiência me ajudou a consolidar meu interesse na área de tecnologia.
            </p>
            <p className={styles.paragrafo}>
                Atualmente, estou focado nos estudos e desenvolvendo projetos acadêmicos e pessoais que me ajudam a explorar áreas como programação, desenvolvimento web e ciência de dados. Tenho experiência em várias linguagens, como Python, Java, C, PHP, e ferramentas como MySQL e React.
            </p>
            <p className={styles.paragrafo}>
                Um dos momentos mais marcantes foi quando comecei a trabalhar em equipe em projetos acadêmicos. Foi aí que descobri a importância de ferramentas como o GitHub para colaborar e organizar trabalhos em grupo. Isso me inspirou a continuar aprimorando minhas habilidades e buscar novas formas de aprender e ensinar.
            </p>
            <p className={styles.paragrafo}>
                Além da tecnologia, tenho hobbies como tocar guitarra, violão e violino, desenhar e assistir filmes, que me ajudam a equilibrar os estudos e a vida pessoal.
            </p>
            <p className={styles.paragrafo}>
                Estou sempre em busca de novos aprendizados e desafios. Espero que, assim como eu, você também encontre inspiração para seguir aprendendo e evoluindo constantemente. Vamos construir juntos um futuro incrível na área de tecnologia!
            </p>
        </PostModelo>
    );
}
