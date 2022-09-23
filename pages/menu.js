import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Menu.module.css'

const Menu = () => {
    const router = useRouter()

    return (
        <div className={styles.navHack}>
            <button className={styles.backButton} type="button" onClick={() => router.back()}>
                <svg width="46" height="46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M41.42 45.514 23.015 27.08 4.609 45.514.5 41.405 18.934 23 .5 4.595 4.61.485 23.014 18.92 41.42.515l4.08 4.08L27.095 23 45.5 41.405l-4.08 4.11Z"
                        fill="#fff"
                    />
                </svg>
            </button>
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
        </div>
    )
}

export default Menu
