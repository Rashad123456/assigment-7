import { createContext, useContext, useMemo, useState } from "react"

const TimelineContext = createContext()

const initialEntries = [
  {
    id: 1,
    friendId: 1,
    friendName: "Tom Baker",
    type: "Call",
    title: "Call with Tom Baker",
    date: "2026-03-29T10:30:00",
  },
  {
    id: 2,
    friendId: 2,
    friendName: "Sarah Chen",
    type: "Text",
    title: "Text with Sarah Chen",
    date: "2026-03-26T16:10:00",
  },
  {
    id: 3,
    friendId: 3,
    friendName: "Alex Patel",
    type: "Video",
    title: "Video with Alex Patel",
    date: "2026-03-24T20:00:00",
  },
]

export const TimelineProvider = ({ children }) => {
  const [entries, setEntries] = useState(initialEntries)

  const addEntry = ({ friendId, friendName, type }) => {
    const newEntry = {
      id: Date.now(),
      friendId,
      friendName,
      type,
      title: `${type} with ${friendName}`,
      date: new Date().toISOString(),
    }

    setEntries((prev) => [newEntry, ...prev])
  }

  const value = useMemo(() => ({ entries, addEntry }), [entries])

  return (
    <TimelineContext.Provider value={value}>
      {children}
    </TimelineContext.Provider>
  )
}

export const useTimeline = () => useContext(TimelineContext)