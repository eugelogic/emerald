import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/QRC.module.scss'

const QRC = () => {
    return (
        <Layout title="QR Code">
            <div className="container">
                <h1>QR Code</h1>
                <p>
                    Scan the following{' '}
                    <a href="https://en.wikipedia.org/wiki/QR_code" target="_blank" rel="noopener noreferrer">
                        QR code
                    </a>{' '}
                    with the camera of your mobile phone in order to visit my homepage.
                </p>
                <div className={styles.qrcImg}>
                    <Image
                        src="/eugene-molari-dot-digital-qr-code.jpg"
                        alt="eugene molari dot digital qr code"
                        width={300}
                        height={300}
                    />
                </div>
                <p>
                    This can be useful when talking to someone face to face who has never visited my website since
                    it&apos;s quicker than launching the browser and typing in the address.
                </p>
            </div>
        </Layout>
    )
}

export default QRC
