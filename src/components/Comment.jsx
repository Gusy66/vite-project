import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
    return (
        <div className={styles.comment}>
            <img src="https://img.freepik.com/vetores-premium/avatar-de-homem-barbudo-foto-generica-de-perfil-masculino_53562-20202.jpg" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="11 de maio às 08:13h" datetime="2022-05-11 08:33:22">Cerca de 1h atrás</time>
                        </div>

                        <button title="Deletar cometário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>Muito bom Gus, parabéns!</p>
                </div>

                <footer>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </footer>
            </div>
        </div>

    )
}