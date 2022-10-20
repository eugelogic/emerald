import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/IndexItemSplit.module.scss'

const IndexItemSplit = ({ slug, imageSrc, imageAlt, imageWidth, imageHeight, categories, title, children }) => {
    return (
        <li className={styles.listItem}>
            <div className={styles.media}>
                <Link href={`/${slug}`}>
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
            <div className={styles.blurb}>
                <div className={styles.categories}>
                    <span>{categories}</span>
                </div>
                <Link href={`/${slug}`}>
                    <a>
                        <h2>{title}</h2>
                    </a>
                </Link>
                {children}
            </div>
        </li>
    )
}

export default IndexItemSplit
