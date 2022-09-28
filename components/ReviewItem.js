import Link from 'next/link'

const ReviewItem = ({ review }) => {
    return (
        <li
            style={{
                marginBottom: '1rem',
                listStyle: 'none',
            }}
        >
            <span>{review.frontmatter.industry}</span>
            <Link href={`/review/${review.slug}`}>
                <a>
                    <h2 style={{ margin: '0' }}>{review.frontmatter.title}</h2>
                </a>
            </Link>
            <p style={{ margin: '0' }}>{review.frontmatter.excerpt}</p>
            <time dateTime={review.frontmatter.date}>{review.frontmatter.date}</time>
        </li>
    )
}

export default ReviewItem
