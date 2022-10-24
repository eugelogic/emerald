import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/IndexItemSplit.module.scss'

const ReviewItem = ({ review }) => {
    return (
        <li className={styles.listItem}>
            <div className={styles.media}>
                <Link href={`/review/${review.slug}`}>
                    <a>
                        <Image
                            src={review.frontmatter.thumbnail}
                            alt={review.frontmatter.title}
                            width={540}
                            height={436}
                        />
                    </a>
                </Link>
            </div>
            <div className={styles.blurb}>
                <div className={styles.categories}>
                    <span>#{review.frontmatter.industry}</span>
                </div>
                <Link href={`/review/${review.slug}`}>
                    <a>
                        <h2>{review.frontmatter.title}</h2>
                    </a>
                </Link>
                <p>{review.frontmatter.excerpt}</p>
                <div className="buttonLink">
                    <Link href={`/review/${review.slug}`}>
                        <a>See Details</a>
                    </Link>
                </div>
            </div>
        </li>
    )
}

export default ReviewItem
