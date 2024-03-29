import Layout from '../components/Layout'
import IndexItemSplit from '../components/IndexItemSplit'
import Link from 'next/link'

const Work = () => {
    return (
        <Layout title="Work">
            <div className="container">
                <h1>Work</h1>
                <p>Here are some of the websites I designed and coded over the years for a wide range of clients.</p>
                <ul className="indexList">
                    <IndexItemSplit
                        slug="work/hbm"
                        imageSrc="/hbm-homepage-thumbnail.jpg"
                        imageAlt="hbm homepage thumbnail"
                        imageWidth="840"
                        imageHeight="463"
                        categories="#DESIGN #CODE"
                        title="HBM"
                    >
                        <p>
                            Brochure website with a loooong homepage, lots of content in the internal pages and a number
                            of client story items.
                        </p>
                        <div className="buttonLink">
                            <Link href="/work/hbm">
                                <a>Learn More</a>
                            </Link>
                        </div>
                    </IndexItemSplit>
                </ul>
                <div className="moreContent">
                    <p>More work items coming soon.</p>
                    <p>Want to see more of my output ?</p>
                    <div className="buttonLink">
                        <Link href="/playground">
                            <a>View Playground</a>
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Work
