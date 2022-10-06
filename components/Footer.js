import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                Site built with{' '}
                <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                    NextJS
                </a>{' '}
                and hosted on{' '}
                <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
                    Vercel
                </a>{' '}
                for free :-)
            </p>
            <p>
                Please{' '}
                <a href="https://github.com/eugelogic/emerald/issues" target="_blank" rel="noopener noreferrer">
                    let me know on GitHub
                </a>{' '}
                if you have found any issue/bug or just want to share some constructive criticism about this website.
            </p>
            <Link href="/">
                <a>
                    <span>&copy; 2012-{new Date().getFullYear()} Eugene Molari Digital</span>
                </a>
            </Link>
        </footer>
    )
}

export default Footer
