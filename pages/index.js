import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Quotes from '../public/quotes.json'

const Home = () => {
    function randomItemFromArray(arr) {
        const item = arr[Math.floor(Math.random() * arr.length)]
        return item
    }
    const randomQuote = randomItemFromArray(Quotes)

    return (
        <div className={styles.container}>
            <div className={`${styles.box} ${styles.l}`}>
                <div className={`${styles.box} ${styles.lt}`}>
                    <div className={`${styles.box} ${styles.ltt}`}>
                        <div className={`${styles.box} ${styles.lttl}`}>
                            <div className={`${styles.box} ${styles.mobile}`}>
                                <Image
                                    src="/eugene-molari.jpg"
                                    alt="Eugene Molari"
                                    width={542}
                                    height={542}
                                    layout="fill"
                                />
                            </div>
                            <div className={styles.box}>M</div>
                            <div className={styles.box}>S</div>
                            <div className={styles.box}>I</div>
                            <div className={styles.box}>T</div>
                        </div>
                        <div className={`${styles.box} ${styles.lttr}`}>Eugene</div>
                    </div>
                    <div className={`${styles.box} ${styles.ltb}`}>
                        <div className={`${styles.box} ${styles.ltbl}`}>
                            <Image
                                src="/eugene-molari.jpg"
                                alt="Eugene Molari"
                                width={542}
                                height={542}
                                layout="fill"
                            />
                        </div>
                        <div className={`${styles.box} ${styles.ltbr}`}>
                            <p>“{randomQuote.text}”</p>
                            <p>• {randomQuote.author}</p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.box} ${styles.lb}`}>
                    <div className={`${styles.box} ${styles.lbl}`}>Work</div>
                    <div className={`${styles.box} ${styles.lbr}`}>Reviews</div>
                </div>
            </div>

            <div className={`${styles.box} ${styles.r}`}>
                <div className={`${styles.box} ${styles.rl}`}>Chirps</div>
                <div className={`${styles.box} ${styles.rr}`}>
                    <div className={`${styles.box} ${styles.rrt}`}>Playground</div>
                    <div className={`${styles.box} ${styles.rrb}`}>People</div>
                </div>
            </div>
        </div>
    )
}

export default Home
