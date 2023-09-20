import { getFeaturedEvents } from "../dummy-data"
import EventList from "../components/events/event-list"

export default function HomePage() {
  const featuredEvents = getFeaturedEvents()
  return (
    <>
      <h1>HomePage</h1>
      <>
      {<EventList items={featuredEvents}/>}
      </>
    </>
  )
}
