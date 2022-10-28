/* eslint-disable */
import Head from 'next/head'
import Link from 'next/link'
import BackButton from '../components/BackButton'
import styles from '../styles/Menu.module.scss'

const Menu = () => {
    return (
        <>
            <Head>
                <title>Main Menu | Eugene Molari Digital </title>
                <meta name="description" content="Product Designer" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="./favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=McLaren&display=swap" rel="stylesheet" />
            </Head>
            <BackButton color="white" />
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
                        <Link href="/chirps">
                            <a>Chirps</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Menu
