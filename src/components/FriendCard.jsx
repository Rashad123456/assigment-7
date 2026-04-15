import { Link } from "react-router-dom"
import { getStatusClass } from "../utils/helpers"

const FriendCard = ({ friend }) => {
  return (
    <Link
      to={`/friend/${friend.id}`}
      className="soft-card block px-4 py-5 transition hover:shadow-md"
    >
      <div className="flex flex-col items-center text-center">
        <img
          src={friend.picture}
          alt={friend.name}
          className="h-14 w-14 rounded-full object-cover"
        />

        <h3 className="mt-3 text-sm font-semibold text-slate-800">
          {friend.name}
        </h3>

        <p className="mt-1 text-[11px] text-slate-500">
          {friend.days_since_contact} days
        </p>

        <div className="mt-2 flex flex-wrap justify-center gap-1">
          {friend.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className={`mt-3 status-pill ${getStatusClass(friend.status)}`}>
          {friend.status}
        </span>
      </div>
    </Link>
  )
}

export default FriendCard