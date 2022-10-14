import { useRouter } from 'next/router'
import styles from '../styles/BackButton.module.scss'

const BackButton = ({ color }) => {
    const router = useRouter()

    return (
        <button className={styles.backButton} type="button" onClick={() => router.back()}>
            <svg width="46" height="46">
                <path
                    d="M41.42 45.514 23.015 27.08 4.609 45.514.5 41.405 18.934 23 .5 4.595 4.61.485 23.014 18.92 41.42.515l4.08 4.08L27.095 23 45.5 41.405l-4.08 4.11Z"
                    fill={color}
                />
            </svg>
        </button>
    )
}

export default BackButton
