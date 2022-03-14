import Link from 'next/link'

const PostItem = ({ post }) => {
    return (
        <li
            style={{
                marginBottom: '1rem',
                listStyle: 'none',
            }}
        >
            <span>{post.frontmatter.category}</span>
            <Link href={`/blog/${post.slug}`}>
                <a>
                    <h2 style={{ margin: '0' }}>{post.frontmatter.title}</h2>
                </a>
            </Link>
            <p style={{ margin: '0' }}>{post.frontmatter.excerpt}</p>
            <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
        </li>
    )
}

export default PostItem
