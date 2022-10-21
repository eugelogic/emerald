import { marked } from 'marked'
import styles from '../styles/ChirpItem.module.scss'

const ChirpItem = ({ chirp }) => {
    const chirpData = chirp.frontmatter
    return (
        <li className={styles.listItem}>
            <time dateTime={chirpData.date}>{chirpData.date}</time>
            <div className={styles.chirpBody} dangerouslySetInnerHTML={{ __html: marked(chirp.content) }}></div>
            {chirpData.twitterLink ? (
                <div className={styles.twitterLink}>
                    <a href={chirpData.twitterLink} target="_blank" rel="noopener noreferrer">
                        {chirpData.twitterLink} &#10138;
                    </a>
                </div>
            ) : (
                ''
            )}
        </li>
    )
}

export default ChirpItem
