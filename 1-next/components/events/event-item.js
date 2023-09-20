import  Link  from "next/link"
import styles from './event-item.module.css'

export default function EventItem(props) {
    const {title, image, date, location, id} = props
    const readableDate = new Date(date).toLocaleDateString('en-Us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    
    const formattedAddress = location.replace(', ','\n')

    const exploreLink = `/events/${id}`
    console.log(typeof exploreLink)
    return (
         <li className={styles.item}>
            <img src={image} alt={title} />
            <div>
                <h2>{title}</h2>
                <div>
                    <time>{readableDate}</time>
                </div>
                <div>
                    <address>{formattedAddress}</address>
                </div>
                <div>
                    <Link href={exploreLink} >Explore Event</Link>
                </div>
            </div>
         </li>
    )
}