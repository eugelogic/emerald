/* eslint-disable */
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Menu.module.scss'

const Menu = () => {
    const router = useRouter()

    return (
        <>
            <Head>
                <title>Main Menu | Eugene Molari Digital </title>
                <meta name="description" content="Product Designer" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="./favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=McLaren&family=Montserrat:wght@300&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <nav className={styles.navHack}>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/work">
                            <a>Work</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/reviews">
                            <a>Reviews</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/playground">
                            <a>Playground</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/people">
                            <a>People</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/links">
                            <a>Links</a>
                        </Link>
                    </li>
                </ul>
                <button className={styles.backButton} type="button" onClick={() => router.back()}>
                    <svg width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M41.42 45.514 23.015 27.08 4.609 45.514.5 41.405 18.934 23 .5 4.595 4.61.485 23.014 18.92 41.42.515l4.08 4.08L27.095 23 45.5 41.405l-4.08 4.11Z"
                            fill="#fff"
                        />
                    </svg>
                </button>
            </nav>
        </>
    )
}

export default Menu
