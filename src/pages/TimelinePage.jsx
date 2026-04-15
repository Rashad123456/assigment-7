import { useMemo, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import TimelineEntry from '../components/TimelineEntry'
import { useTimeline } from '../contexts/TimelineContext'

const filters = ['All', 'Call', 'Text', 'Video']

const TimelinePage = () => {
  const { entries } = useTimeline()
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredEntries = useMemo(() => {
    if (activeFilter === 'All') return entries
    return entries.filter((entry) => entry.type === activeFilter)
  }, [entries, activeFilter])

  return (
    <section>
      <SectionHeading
        title="Timeline"
        subtitle="See the history of all your calls, texts, and video chats. Use the filter buttons to show a specific interaction type."
      />

      <div className="mb-6 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeFilter === filter ? 'bg-brand text-white' : 'bg-white text-slate-600 shadow-soft'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredEntries.length ? (
          filteredEntries.map((entry) => <TimelineEntry key={entry.id} entry={entry} />)
        ) : (
          <div className="rounded-3xl bg-white p-8 text-center text-slate-500 shadow-soft">
            No timeline entries found for this filter.
          </div>
        )}
      </div>
    </section>
  )
}

export default TimelinePage
