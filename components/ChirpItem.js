import styles from '../styles/ChirpItem.module.css'

const ChirpItem = ({ date, tweetted = false, tweetLink, children }) => {
    return (
        <li className={styles.listItem}>
            <time dateTime={date}>{date}</time>
            <div className={styles.chirpBody}>{children}</div>
            {tweetted ? (
                <div className={styles.twitterLink}>
                    <a href={tweetLink} target="_blank" rel="noopener noreferrer">
                        {tweetLink} &#10138;
                    </a>
                </div>
            ) : (
                ''
            )}
        </li>
    )
}

export default ChirpItem
