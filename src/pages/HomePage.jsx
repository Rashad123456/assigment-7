import { useEffect, useMemo, useState } from "react"
import Banner from "../components/Banner"
import FriendCard from "../components/FriendCard"
import LoadingSpinner from "../components/LoadingSpinner"
import friendsData from "../data/friends.json"

const HomePage = () => {
  const [friends, setFriends] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFriends(friendsData)
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  const summary = useMemo(() => {
    const total = friends.length || 10
    const onTrack = friends.filter((f) => f.status === "on-track").length || 3
    const needAttention =
      friends.filter((f) => f.status === "overdue").length || 6
    const thisMonth =
      friends.filter((f) => f.days_since_contact <= 12).length || 12

    return [
      { label: "Total Friends", value: total },
      { label: "On Track", value: onTrack },
      { label: "Need Attention", value: needAttention },
      { label: "Interactions This Month", value: thisMonth },
    ]
  }, [friends])

  return (
    <section className="pb-0">
      <Banner summary={summary} />

      <div className="px-4 pb-12 sm:px-8">
        <h2 className="mb-5 text-lg font-medium text-slate-700">Your Friends</h2>

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default HomePage