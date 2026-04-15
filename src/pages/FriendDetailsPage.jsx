import {
  HiOutlineArchive,
  HiOutlineClock,
  HiOutlineTrash,
} from "react-icons/hi"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import friends from "../data/friends.json"
import { getStatusClass, formatDate } from "../utils/helpers"
import { useTimeline } from "../contexts/TimelineContext"
import NotFoundPage from "./NotFoundPage"

const QuickButton = ({ image, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center justify-center rounded border border-slate-200 bg-white px-4 py-3 text-[11px] text-slate-600 transition hover:bg-slate-50"
  >
    <img src={image} alt={label} className="mb-2 h-4 w-4 object-contain" />
    <span>{label}</span>
  </button>
)

const FriendDetailsPage = () => {
  const { id } = useParams()
  const { addEntry } = useTimeline()

  const friend = friends.find((item) => item.id === Number(id))

  if (!friend) return <NotFoundPage />

  const handleQuickCheckIn = (type) => {
    addEntry({
      friendId: friend.id,
      friendName: friend.name,
      type,
    })
    toast.success(`${type} added for ${friend.name}`)
  }

  return (
    <section className="px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-4 md:grid-cols-[180px_1fr]">
          <div className="space-y-2">
            <div className="soft-card px-4 py-5 text-center shadow-sm">
              <img
                src={friend.picture}
                alt={friend.name}
                className="mx-auto h-14 w-14 rounded-full object-cover"
              />

              <h1 className="mt-3 text-sm font-semibold text-slate-800">
                {friend.name}
              </h1>

              <span
                className={`mt-2 inline-flex items-center rounded-full px-3 py-1 text-[10px] font-semibold capitalize ${getStatusClass(
                  friend.status
                )}`}
              >
                {friend.status}
              </span>

              <div className="mt-2 flex flex-wrap justify-center gap-1">
                {friend.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-medium uppercase tracking-wide text-emerald-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-[11px] italic leading-5 text-slate-500">
                "{friend.bio}"
              </p>

              <p className="mt-3 text-[10px] text-slate-400">
                Preferred: email
              </p>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded border border-slate-200 bg-white px-3 py-2 text-[11px] text-slate-600 transition hover:bg-slate-50">
              <HiOutlineClock className="text-sm" />
              Snooze 2 Weeks
            </button>

            <button className="flex w-full items-center justify-center gap-2 rounded border border-slate-200 bg-white px-3 py-2 text-[11px] text-slate-600 transition hover:bg-slate-50">
              <HiOutlineArchive className="text-sm" />
              Archive
            </button>

            <button className="flex w-full items-center justify-center gap-2 rounded border border-red-200 bg-white px-3 py-2 text-[11px] text-red-500 transition hover:bg-red-50">
              <HiOutlineTrash className="text-sm" />
              Delete
            </button>
          </div>

          <div className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="soft-card px-4 py-5 text-center">
                <h3 className="text-lg font-bold text-slate-700">
                  {friend.days_since_contact}
                </h3>
                <p className="mt-2 text-[11px] text-slate-400">
                  Days Since Contact
                </p>
              </div>

              <div className="soft-card px-4 py-5 text-center">
                <h3 className="text-lg font-bold text-slate-700">
                  {friend.goal}
                </h3>
                <p className="mt-2 text-[11px] text-slate-400">Goal (Days)</p>
              </div>

              <div className="soft-card px-4 py-5 text-center">
                <h3 className="text-sm font-semibold text-slate-700">
                  {formatDate(friend.next_due_date)}
                </h3>
                <p className="mt-2 text-[11px] text-slate-400">Next Due</p>
              </div>
            </div>

            <div className="soft-card px-4 py-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-sm font-semibold text-slate-700">
                    Relationship Goal
                  </h2>
                  <p className="mt-3 text-[12px] text-slate-500">
                    Connect every <span className="font-semibold">{friend.goal} days</span>
                  </p>
                </div>

                <button className="rounded bg-slate-100 px-3 py-1.5 text-[10px] font-medium text-slate-500 hover:bg-slate-200">
                  Edit
                </button>
              </div>
            </div>

            <div className="soft-card px-4 py-4">
              <h2 className="text-sm font-semibold text-slate-700">
                Quick Check-In
              </h2>

              <div className="mt-4 grid grid-cols-3 gap-3">
                <QuickButton
                  image="/assets/call.png"
                  label="Call"
                  onClick={() => handleQuickCheckIn("Call")}
                />
                <QuickButton
                  image="/assets/text.png"
                  label="Text"
                  onClick={() => handleQuickCheckIn("Text")}
                />
                <QuickButton
                  image="/assets/video.png"
                  label="Video"
                  onClick={() => handleQuickCheckIn("Video")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FriendDetailsPage