import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_fotos.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                Oi, meu nome é Igor Terplak Gutierrez e sou estudante de Ciência da Computação na PUCPR. Ao longo da minha trajetória acadêmica, já trabalhei em projetos de software, redes, e análise de dados. Com uma boa base em diversas linguagens de programação, busco sempre melhorar minhas habilidades e aplicar o que aprendo em projetos práticos.
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    alt=''
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Igor"
                />
            </div>
        </div>
    )
}