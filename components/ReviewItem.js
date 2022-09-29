import Link from 'next/link'
import styles from '../styles/IndexListItem.module.css'

const ReviewItem = ({ review }) => {
    return (
        <li className={styles.listItem}>
            <span>{review.frontmatter.industry}</span>
            <Link href={`/review/${review.slug}`}>
                <a>
                    <h2>{review.frontmatter.title}</h2>
                </a>
            </Link>
            <p>{review.frontmatter.excerpt}</p>
            <time dateTime={review.frontmatter.date}>{review.frontmatter.date}</time>
        </li>
    )
}

export default ReviewItem
