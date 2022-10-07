import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/PlayItem.module.scss'

const PlayItem = ({ slug, imageSrc, imageAlt, imageWidth, imageHeight, categories, title, children }) => {
    return (
        <li className={styles.listItem}>
            <Link href={`/playground/${slug}`}>
                <a>
                    <Image src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} layout="responsive" />
                </a>
            </Link>
            <div className={styles.categories}>
                <span>{categories}</span>
            </div>
            <Link href={`/playground/${slug}`}>
                <a>
                    <h2>{title}</h2>
                </a>
            </Link>
            {children}
        </li>
    )
}

export default PlayItem
