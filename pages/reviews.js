import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReviewItem from '../components/ReviewItem'
import Layout from '../components/Layout'
import { sortByDate } from '../utils'

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('reviews'))

    const reviews = files.map((filename) => {
        const slug = filename.replace('.md', '')
        const markdownWithMeta = fs.readFileSync(path.join('reviews', filename), 'utf8')
        const { data: frontmatter } = matter(markdownWithMeta)

        return {
            slug,
            frontmatter,
        }
    })

    return {
        props: {
            reviews: reviews.sort(sortByDate),
        },
    }
}

const Reviews = ({ reviews }) => {
    return (
        <Layout title="Reviews">
            <div className="container">
                <h1>Reviews</h1>
                <p>
                    There are some really good websites out there. This is a small collection of reviews where I get a
                    chance to explore, make a record and learn how people handle conversion rate optimisation,
                    illustration, typography, colour cordination, layout and more.
                </p>
                <ul>
                    {reviews?.length > 0 && reviews.map((review, index) => <ReviewItem key={index} review={review} />)}
                </ul>
            </div>
        </Layout>
    )
}

export default Reviews
