import styles from '../styles/Home.module.css'

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.box} ${styles.topLeft}`}>
                <div className={`${styles.box} ${styles.topHalf}`}>
                    <div className={`${styles.box} ${styles.firstFourthSquares}`}>
                        <div className={`${styles.box} ${styles.topLeftSquare}`}>TLS</div>
                        <div className={`${styles.box} ${styles.topRightSquare}`}>TRS</div>
                        <div className={`${styles.box} ${styles.bottomLeftSquare}`}>BLS</div>
                        <div className={`${styles.box} ${styles.bottomRightSquare}`}>BRS</div>
                    </div>
                    <div className={`${styles.box} ${styles.middleFourth}`}>MF</div>
                    <div className={`${styles.box} ${styles.lastFourth}`}>LF</div>
                </div>

                <div className={`${styles.box} ${styles.bottomHalf}`}>
                    <div className={`${styles.box} ${styles.firstFourth}`}>FF</div>
                    <div className={`${styles.box} ${styles.remainderFourth}`}>MF</div>
                </div>
            </div>

            <div className={`${styles.box} ${styles.topRight}`}>Two</div>

            <div className={`${styles.box} ${styles.bottomLeft}`}>Three</div>

            <div className={`${styles.box} ${styles.bottomRight}`}>Four</div>
        </div>
    )
}

export default Home
