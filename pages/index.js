import Link from 'next/link'
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
                            <div className={`${styles.box} ${styles.smallTileOne}`}>M</div>
                            <div className={`${styles.box} ${styles.smallTileTwo}`}>
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener">
                                    <svg width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M8.816.09C10.416.016 10.926 0 15 0c4.075 0 4.584.018 6.183.09 1.598.072 2.689.327 3.643.697a7.38 7.38 0 0 1 2.657 1.732 7.325 7.325 0 0 1 1.729 2.655c.37.954.624 2.045.698 3.64.074 1.603.09 2.113.09 6.186 0 4.075-.018 4.584-.09 6.184-.072 1.595-.327 2.686-.698 3.641a7.358 7.358 0 0 1-1.73 2.658 7.353 7.353 0 0 1-2.656 1.729c-.954.37-2.045.624-3.64.698-1.602.074-2.111.09-6.186.09-4.075 0-4.585-.018-6.184-.09-1.596-.072-2.686-.327-3.641-.698a7.36 7.36 0 0 1-2.658-1.73 7.353 7.353 0 0 1-1.73-2.656c-.37-.954-.623-2.045-.697-3.64C.016 19.582 0 19.073 0 15c0-4.075.018-4.585.09-6.183.072-1.598.327-2.689.697-3.643.377-1.001.968-1.908 1.732-2.657A7.353 7.353 0 0 1 5.174.787C6.128.417 7.219.164 8.814.09h.002Zm12.245 2.7c-1.581-.072-2.056-.087-6.061-.087s-4.48.015-6.061.087c-1.464.067-2.257.31-2.786.517-.7.273-1.2.596-1.725 1.12a4.653 4.653 0 0 0-1.121 1.726c-.206.529-.45 1.322-.517 2.786-.072 1.582-.087 2.056-.087 6.061s.015 4.48.087 6.061c.067 1.463.31 2.257.517 2.786.24.65.623 1.241 1.12 1.725.485.498 1.075.881 1.726 1.121.529.206 1.322.45 2.786.517 1.582.072 2.055.087 6.061.087s4.48-.015 6.061-.087c1.463-.067 2.257-.31 2.786-.517.7-.273 1.2-.596 1.725-1.12a4.657 4.657 0 0 0 1.121-1.726c.206-.529.45-1.323.517-2.786.072-1.581.087-2.056.087-6.061s-.015-4.48-.087-6.061c-.067-1.464-.31-2.257-.517-2.786-.273-.7-.596-1.2-1.12-1.725a4.654 4.654 0 0 0-1.726-1.121c-.529-.206-1.323-.45-2.786-.517Zm-7.977 16.834a5.003 5.003 0 0 0 5.455-8.163 5.004 5.004 0 1 0-5.455 8.163ZM9.548 9.548a7.71 7.71 0 1 1 10.904 10.904A7.71 7.71 0 0 1 9.548 9.548Zm14.872-1.11a1.824 1.824 0 1 0-2.504-2.654 1.824 1.824 0 0 0 2.504 2.654Z"
                                            fill="#fff"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div className={`${styles.box} ${styles.smallTileThree}`}>
                                <a href="https://github.com/eugelogic" target="_blank" rel="noreferrer noopener">
                                    <svg width="30" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21.404 31.016a1.503 1.503 0 0 1-1.503-1.503v-3.908a3.23 3.23 0 0 0-.812-2.494 1.504 1.504 0 0 1 .917-2.51c3.667-.436 7.048-1.608 7.048-7.965a6.011 6.011 0 0 0-1.007-3.337 4.133 4.133 0 0 1-.616-3.096c.136-.7.136-1.419 0-2.119-1.125.38-2.185.933-3.14 1.638a1.503 1.503 0 0 1-1.263.226 15.254 15.254 0 0 0-8.296 0 1.503 1.503 0 0 1-1.262-.226 11.121 11.121 0 0 0-3.172-1.638 5.29 5.29 0 0 0 0 2.12 4.268 4.268 0 0 1-.646 3.125 6.117 6.117 0 0 0-1.007 3.352c0 5.846 2.826 7.409 7.064 7.95a1.503 1.503 0 0 1 1.232.992 1.503 1.503 0 0 1-.316 1.503 3.097 3.097 0 0 0-.826 2.344v4.043a1.503 1.503 0 1 1-3.006 0v-.857a9.018 9.018 0 0 1-7.92-3.14 5.86 5.86 0 0 0-1.743-1.323 1.505 1.505 0 1 1 .751-2.916 7.409 7.409 0 0 1 3.006 2.044c1.503 1.503 3.006 2.825 5.861 2.284a5.846 5.846 0 0 1 .346-2.374c-3.096-.782-7.515-3.006-7.515-10.52a9.017 9.017 0 0 1 1.503-5.005c.183-.274.253-.607.196-.932a8.551 8.551 0 0 1 .496-4.824 1.503 1.503 0 0 1 .946-.856c.511-.15 2.345-.451 5.817 1.803a18.275 18.275 0 0 1 8.55 0C24.56.643 26.394.928 26.89 1.094a1.504 1.504 0 0 1 .947.856c.628 1.532.8 3.212.496 4.84a1.128 1.128 0 0 0 .165.856A9.017 9.017 0 0 1 30 12.666c0 7.62-4.389 9.828-7.514 10.52.275.806.387 1.66.33 2.51v3.817a1.503 1.503 0 0 1-1.412 1.503Z"
                                            fill="#fff"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div className={`${styles.box} ${styles.smallTileFour}`}>
                                <a href="https://twitter.com/EugeneMolari" target="_blank" rel="noreferrer noopener">
                                    <svg width="34" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M32 2.78s-2.752 1.625-4.282 2.086A6.11 6.11 0 0 0 17 8.956v1.364A14.536 14.536 0 0 1 4.727 4.143S-.727 16.416 11.546 21.87A15.873 15.873 0 0 1 2 24.597c12.273 6.819 27.273 0 27.273-15.681 0-.38-.038-.758-.11-1.132C30.556 6.412 32 2.779 32 2.779Z"
                                            stroke="#fff"
                                            strokeWidth="3.75"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className={`${styles.box} ${styles.lttr}`}>
                            <h1>Eugene Molari</h1>
                            <h2>Product Designer</h2>
                        </div>
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
                            <figure>
                                <q>{randomQuote.text}</q>
                                <figcaption>- {randomQuote.author}</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className={`${styles.box} ${styles.lb}`}>
                    <div className={`${styles.box} ${styles.lbl}`}>
                        <Link href="/work">
                            <a>
                                <h2>Work</h2>
                                <Image src="/mous-block-man.jpg" alt="Mous Block Management" width={600} height={420} />
                            </a>
                        </Link>
                    </div>
                    <div className={`${styles.box} ${styles.lbr}`}>
                        <Link href="/reviews">
                            <a>
                                <Image
                                    src="/tigermarketing-co-uk.jpg"
                                    alt="tigermarketing.co.uk"
                                    width={600}
                                    height={436}
                                />
                                <h2>Reviews</h2>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={`${styles.box} ${styles.r}`}>
                <div className={`${styles.box} ${styles.rl}`}>Chirps</div>
                <div className={`${styles.box} ${styles.rr}`}>
                    <div className={`${styles.box} ${styles.rrt}`}>
                        <Link href="/playground">
                            <a>
                                <h2>Playground</h2>
                                <Image src="/whats-your-type.jpg" alt="What's your type" width={600} height={451} />
                            </a>
                        </Link>
                    </div>
                    <div className={`${styles.box} ${styles.rrb}`}>People</div>
                </div>
            </div>
        </div>
    )
}

export default Home
