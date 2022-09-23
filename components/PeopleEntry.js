import Image from 'next/image'
import styles from '../styles/PeopleEntry.module.css'

const PeopleEntry = ({ src, link, name }) => {
    return (
        <li className={styles.peopleEntryStripe}>
            <a href={link} target="_blank" rel="noreferrer noopener">
                <Image src={src} alt={name} width={40} height={40} />
                <span>{name}</span>
            </a>
        </li>
    )
}

export default PeopleEntry
