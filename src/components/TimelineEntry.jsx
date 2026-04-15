const iconImageMap = {
  Call: "/assets/call.png",
  Text: "/assets/text.png",
  Video: "/assets/video.png",
  Meetup: "/assets/call.png",
}

const TimelineEntry = ({ entry }) => {
  const formattedDate = new Date(entry.date).toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  })

  return (
    <div className="soft-card flex items-start gap-3 px-4 py-3">
      <img
        src={iconImageMap[entry.type] || "/assets/call.png"}
        alt={entry.type}
        className="mt-1 h-4 w-4 object-contain"
      />

      <div>
        <h3 className="text-sm font-medium text-slate-700">{entry.title}</h3>
        <p className="mt-1 text-[11px] text-slate-400">{formattedDate}</p>
      </div>
    </div>
  )
}

export default TimelineEntry