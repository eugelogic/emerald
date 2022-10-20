import Image from 'next/image'
import styles from '../styles/ResourceItem.module.scss'

const ResourceItem = ({ resource }) => {
    return (
        <li className={styles.resourceItemEntry} key={resource.id}>
            <Image src={resource.avatar} alt={resource.name} width={40} height={40} />
            <span>{resource.name}</span>
            {resource.CodePen ? (
                <a href={resource.CodePen} target="_blank" rel="noopener noreferrer">
                    <Image src="/icon-codepen.jpg" alt="CodePen link" width={30} height={30} />
                </a>
            ) : (
                ''
            )}
            {resource.GitHub ? (
                <a href={resource.GitHub} target="_blank" rel="noopener noreferrer">
                    <Image src="/icon-codepen.jpg" alt="GitHub link" width={30} height={30} />
                </a>
            ) : (
                ''
            )}
            {resource.Instagram ? (
                <a href={resource.Instagram} target="_blank" rel="noopener noreferrer">
                    <Image src="/icon-instagram.jpg" alt="Instagram link" width={30} height={30} />
                </a>
            ) : (
                ''
            )}
            {resource.LinkedIn ? (
                <a href={resource.LinkedIn} target="_blank" rel="noopener noreferrer">
                    <Image src="/icon-codepen.jpg" alt="LinkedIn link" width={30} height={30} />
                </a>
            ) : (
                ''
            )}
            {resource.Pinterest ? (
                <a href={resource.Pinterest} target="_blank" rel="noopener noreferrer">
                    <Image src="/icon-codepen.jpg" alt="Pinterest link" width={30} height={30} />
                </a>
            ) : (
                ''
            )}
            {resource.Twitter ? (
                <a href={resource.Twitter} target="_blank" rel="noopener noreferrer">
                    <Image src="/icon-twitter.jpg" alt="Twitter link" width={30} height={30} />
                </a>
            ) : (
                ''
            )}
            {resource.Website ? (
                <a href={resource.Website} target="_blank" rel="noopener noreferrer">
                    <Image src="/icon-codepen.jpg" alt="Website link" width={30} height={30} />
                </a>
            ) : (
                ''
            )}
            {resource.YouTube ? (
                <a href={resource.YouTube} target="_blank" rel="noopener noreferrer">
                    <Image src="/icon-codepen.jpg" alt="YouTube link" width={30} height={30} />
                </a>
            ) : (
                ''
            )}
        </li>
    )
}

export default ResourceItem
