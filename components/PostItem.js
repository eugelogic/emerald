import Link from 'next/link'
import styles from '../styles/IndexListItem.module.css'

const PostItem = ({ post }) => {
    return (
        <li className={styles.listItem}>
            <span>{post.frontmatter.category}</span>
            <Link href={`/blog/${post.slug}`}>
                <a>
                    <h2>{post.frontmatter.title}</h2>
                </a>
            </Link>
            <p>{post.frontmatter.excerpt}</p>
            <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
        </li>
    )
}

export default PostItem
