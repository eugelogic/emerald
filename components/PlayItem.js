import Link from 'next/link'
import Image from 'next/image'
import { marked } from 'marked'
import styles from '../styles/IndexItemSplit.module.scss'

const PlayItem = ({ play }) => {
    return (
        <li className={styles.listItem}>
            <div className={styles.media}>
                <Link href={`/playground/${play.slug}`}>
                    <a>
                        <Image src={play.frontmatter.thumbnail} alt={play.frontmatter.title} width={540} height={540} />
                    </a>
                </Link>
            </div>
            <div className={styles.blurb}>
                <div className={styles.categories}>
                    <span>{play.frontmatter.categories}</span>
                </div>
                <Link href={`/playground/${play.slug}`}>
                    <a>
                        <h2>{play.frontmatter.title}</h2>
                    </a>
                </Link>
                <div dangerouslySetInnerHTML={{ __html: marked(play.content) }}></div>
                <div className="buttonLink">
                    <Link href={`/playground/${play.slug}`}>
                        <a>See Details</a>
                    </Link>
                </div>
            </div>
        </li>
    )
}

export default PlayItem
