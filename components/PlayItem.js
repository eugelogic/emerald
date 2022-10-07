import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/PlayItem.module.scss'

const PlayItem = ({ slug, imageSrc, imageAlt, imageWidth, imageHeight, title, children }) => {
    return (
        <li className={styles.listItem}>
            <Link href={`/playground/${slug}`}>
                <a>
                    <Image src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} layout="responsive" />
                    <h2>{title}</h2>
                </a>
            </Link>
            {children}
        </li>
    )
}

export default PlayItem
