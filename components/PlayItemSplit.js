import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/PlayItemSplit.module.scss'

const PlayItem = ({ slug, imageSrc, imageAlt, imageWidth, imageHeight, categories, title, children }) => {
    return (
        <li className={styles.listItem}>
            <div>
                <Link href={`/playground/${slug}`}>
                    <a>
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            width={imageWidth}
                            height={imageHeight}
                            layout="responsive"
                        />
                    </a>
                </Link>
            </div>
            <div>
                <div className={styles.categories}>
                    <span>{categories}</span>
                </div>
                <Link href={`/playground/${slug}`}>
                    <a>
                        <h2>{title}</h2>
                    </a>
                </Link>
                {children}
            </div>
        </li>
    )
}

export default PlayItem
