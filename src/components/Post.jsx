import styles from './Post.module.css';


export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className = {styles.avatar} 
                    src="https://media.licdn.com/dms/image/v2/C4D03AQExCrDfJ0Q10g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1655493168865?e=1749081600&v=beta&t=4E4dlYdaW37GS3vnfVVP2akGszDpm2uKib6wc60nqyQ" 
                    />
                     <div className={styles.authorInfo}>
                        <strong>
                            Gustavo Bocci Pimentel
                        </strong>
                        <span>
                            Web Developer
                        </span>
                     </div>
                </div>

                <time title="11 de maio às 08:13h" datetime="2022-05-11 08:33:22">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 {' '} <a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>          
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

        </article>
    )
}