import Image from 'next/image'
import styles from '../styles/PeopleItem.module.scss'

const PeopleItem = ({ people }) => {
    return (
        <li className={styles.peopleItemStripe}>
            <a href={people.link} target="_blank" rel="noreferrer noopener">
                <Image src={people.avatar} alt={people.name} width={40} height={40} />
                <div className={styles.text}>
                    <h2>{people.name}</h2>
                    <p>{people.blurb}</p>
                </div>
            </a>
        </li>
    )
}

export default PeopleItem
