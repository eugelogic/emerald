import Image from 'next/image'
import styles from '../styles/PeopleItemHP.module.scss'

const PeopleItemHP = ({ people }) => {
    return (
        <li className={styles.peopleItemStripeHP}>
            <a href={people.link} target="_blank" rel="noreferrer noopener">
                <Image src={people.avatar} alt={people.name} width={40} height={40} />
                <span>{people.name}</span>
            </a>
        </li>
    )
}

export default PeopleItemHP
