import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import styles from '../../styles/HBM.module.scss'

const HBM = () => {
    return (
        <Layout title="HBM">
            <div className="container">
                <h1>HBM</h1>
                <p>
                    This project has a special place in my portfolio. I worked on it twice, in 2015 and again in 2021
                    since the client was happy with the first output.
                </p>
                <p>
                    Visit the live site at{' '}
                    <a href="https://www.h-bm.co.uk/" target="_blank" rel="noopener noreferrer">
                        h-bm.co.uk
                    </a>
                </p>
                <hr />
                <p>
                    The solution is a brochure website with a loooong homepage, lots of content in the internal pages
                    and a number of client story items.
                </p>
                <p>
                    I had to design this website with the features the WordPress theme{' '}
                    <a href="https://avada.theme-fusion.com/" target="_blank" rel="noopener noreferrer">
                        Avada
                    </a>{' '}
                    had to offer.
                </p>
                <p>
                    Since the launch I reproduced the design in Figma because the original website has been{' '}
                    <i>slightly</i> altered. I also changed the name of the company as this piece of work was not
                    actually commissioned by the client and I don&apos;t want to get in trouble with copyrights,
                    it&apos;s now called MAUS instead of HAUS :-)
                </p>
                <hr />
                <p>The initial challenge was to fit lots of content on the homepage.</p>
            </div>
            <div className="colRow--large">
                <div className="colTwoThirds">
                    <Image src="/hbm-homepage.jpg" alt="hbm homepage" width={1440} height={793} />
                </div>
                <div className="colOneThird">
                    <p>We left the hero banner as it was since it converted well already.</p>
                    <p>
                        I recall Dropbox having a similar concept with a mission statement & contact form call to
                        action.
                    </p>
                    <p>We had the extra benefit of having a captivating background image.</p>
                </div>
            </div>
            <div className="container">
                <p>In order to deliver a well balanced homepage I had to do the following:</p>
            </div>
            <div className="colRow">
                <div className="colHalf">
                    <Image
                        className={styles.centerHR}
                        src="/hbm-homepage-full-height-top-half.jpg"
                        alt="hbm homepage full height top half"
                        width={540}
                        height={999}
                    />
                </div>
                <div className="colHalf">
                    <ul className={styles.stretchList}>
                        <li>ask the client to come up with a hierarchy of importance for the content</li>
                        <li>alternate light and dark background banners</li>
                        <li>stick to a traditional 12 bars grid</li>
                        <li>
                            use{' '}
                            <a
                                href="https://avada.theme-fusion.com/element/counter-boxes/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                dynamic counters
                            </a>{' '}
                            to bring attention to the data gathered by the client
                        </li>
                        <li>
                            introduce of a third colour (pink) in the client&apos;s brand to help making some messages
                            stand out
                        </li>
                        <li>
                            expoilt the stylish photography of the client&apos;s contractors architecture as backgrounds
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <p>Moreover I enhanced the user experience with the following practices:</p>
            </div>
            <div className="colRow">
                <div className="colHalf">
                    <Image
                        className={styles.centerHR}
                        src="/hbm-homepage-full-height-bottom-half.jpg"
                        alt="hbm homepage full height bottom half"
                        width={540}
                        height={1213}
                    />
                </div>
                <div className="colHalf">
                    <ul className={styles.stretchList}>
                        <li>exploit clients&apos; photos to convey a sense of trust when sharing testimonials</li>
                        <li>
                            assign a call to action to as many banners as possible to invite the user to interact with
                            more content across the rest of the website
                        </li>
                        <li>create a grid of all staff members to show the extent of the whole team</li>
                        <li>
                            make sure accessibility is observed throughout but some area didn&apos;t have enough colour
                            contrast. Unfortunately the client would not allow for a change of the primary brand colour
                        </li>
                        <li>portrait the in-house app within a smart phone frame</li>
                        <li>choose the TrustPilot widgets that would fit nicely around the clients&apos; content</li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="moreContent">
                    <p>More details about this project coming soon.</p>
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

export default HBM
