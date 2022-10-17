import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'

const About = () => {
    return (
        <Layout title="About">
            <div className="container">
                <h1>About</h1>
                <h2>About Me</h2>
                <Image src="/eugene-molari.jpg" alt="Eugene Molari" width={240} height={240} />
                <p>Greetings, my name is Eugene, I like to design & build web solutions from North London, UK.</p>
                <p>
                    I have 7+ years experience working as project manager and web developer for two WordPress agencies.
                </p>
                <p>
                    I create landing pages, campaigns, websites, apps and illustrations. Check out my{' '}
                    <Link href="/work">
                        <a>work</a>
                    </Link>{' '}
                    and{' '}
                    <Link href="/playground">
                        <a>playground</a>
                    </Link>{' '}
                    pages. I also like to write{' '}
                    <Link href="/reviews">
                        <a>reviews</a>
                    </Link>{' '}
                    .
                </p>
                <p>
                    I&apos;m currently looking for employment as a product designer. Have a look at my{' '}
                    <a href="https://www.linkedin.com/in/eugene-molari/" target="_blank" rel="noopener noreferrer">
                        LinkedIn profile
                    </a>
                    .
                </p>
                <p>
                    When I&apos;m not in front of a computer I like to{' '}
                    <a href="https://www.instagram.com/eugenesview/" target="_blank" rel="noopener noreferrer">
                        take photos
                    </a>
                    , walk or run in my local park,{' '}
                    <a href="https://www.instagram.com/eugesound/" target="_blank" rel="noopener noreferrer">
                        play saxophone
                    </a>{' '}
                    and slide on ice, not all at the same time.
                </p>
                <p>Look forward to connect, ciao 👋🏼</p>
                <h2>About This Website</h2>
                <p>
                    As per the autumn of 2022, this website was built with{' '}
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                        ReactJS
                    </a>{' '}
                    on the{' '}
                    <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                        NextJS framework
                    </a>{' '}
                    and hosted on{' '}
                    <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
                        Vercel
                    </a>{' '}
                    for free.
                </p>
                <p>
                    In terms of style, call me old-fashioned but I like to use{' '}
                    <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
                        SASS
                    </a>
                    . I did try but I&apos;ve never been a big fan of CSS-in-JS as it made my code cluttered and it
                    turns out{' '}
                    <a
                        href="https://dev.to/srmagura/why-were-breaking-up-wiht-css-in-js-4g9b"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CSS-in-JS is not particularly efficient
                    </a>
                    .
                </p>
                <p>
                    <a href="https://gridbyexample.com/" target="_blank" rel="noopener noreferrer">
                        CSS grid
                    </a>{' '}
                    and{' '}
                    <a
                        href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CSS flexbox
                    </a>{' '}
                    were extensively used on the homepage.
                </p>

                <p>
                    For the selection of typography I used{' '}
                    <a href="https://fonts.google.com/specimen/McLaren" target="_blank" rel="noopener noreferrer">
                        McLaren
                    </a>{' '}
                    for headings, I like how it&apos;s square and sans serif but a little bit wonky, just enough to give
                    it a touch of creativity. Everything else uses{' '}
                    <a href="https://fonts.google.com/specimen/Montserrat" target="_blank" rel="noopener noreferrer">
                        Montserrat
                    </a>{' '}
                    which I find simple, minimal and easy to read.
                </p>
                <p>The homepage features a quote selected at random everytime the page is refreshed.</p>
                <p>
                    We all like animations, I used{' '}
                    <a
                        href="https://github.com/linkstrifer/react-rough-notation"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Rough Notation
                    </a>{' '}
                    for highlighting and boxing titles.
                </p>
                <p>
                    I&apos;ve been using apps in dark mode for a long time now so it made sense to have the same
                    approach when I chose the background colour. I hope you don&apos;t mind, I find it less strenuous on
                    the eyes and it&apos;s also more energy efficient. The other hues are a selection close the ones of
                    the{' '}
                    <a href="https://en.wikipedia.org/wiki/CMYK_color_model" target="_blank" rel="noopener noreferrer">
                        CMYK color model
                    </a>
                    .
                </p>
                <p>
                    The website also features a{' '}
                    <Link href="/qrc">
                        <a>QR code</a>
                    </Link>{' '}
                    which makes it easier to share the link of the website with someone face to face. I see more of
                    these codes around, not just in museums but also in public places and shops.
                </p>
                <p>
                    Most of the media featured on this website is hosted on an{' '}
                    <a href="https://aws.amazon.com/s3/" target="_blank" rel="noopener noreferrer">
                        AWS bucket
                    </a>{' '}
                    for the sake of keeping the repository as light as possible.
                </p>
                <p>
                    If you happen to stumble upon a bug and/or would like to share some constructive criticism, please
                    feel free to let me know on{' '}
                    <a href="https://github.com/eugelogic/emerald/issues" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    .
                </p>
            </div>
        </Layout>
    )
}

export default About
