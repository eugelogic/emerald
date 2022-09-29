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
            <Link href="/">
                <a>
                    <span>&copy; 2007-{new Date().getFullYear()} Eugene Molari Digital</span>
                </a>
            </Link>
        </footer>
    )
}

export default Footer
