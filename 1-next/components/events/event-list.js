import EventItem from './event-item'

export default function EventList(props) {
    const { items } = props
    console.log(props)
    return (
        <ul>
            {items.map(item => (
                <EventItem 
                key={item.id}
                id={item.id}
                title={item.title}
                location={item.location}
                date={item.date}
                image={item.image}
                />)
            )}
        </ul>
    )
}
 