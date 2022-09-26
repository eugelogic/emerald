import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link href="/">
                <a>
                    <span>&copy; {new Date().getFullYear()} Eugene Molari Digital</span>
                </a>
            </Link>
        </footer>
    )
}

export default Footer
