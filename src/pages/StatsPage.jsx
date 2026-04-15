import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { useTimeline } from "../contexts/TimelineContext"

const COLORS = ["#7c3aed", "#2f855a", "#d1d5db"]

const StatsPage = () => {
  const { entries } = useTimeline()

  const data = ["Call", "Text", "Video"].map((type) => ({
    name: type,
    value: entries.filter((entry) => entry.type === type).length,
  }))

  return (
    <section className="px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-4xl border border-dashed border-sky-400 p-4">
        <h1 className="text-4xl font-bold text-slate-700">Friendship Analytics</h1>

        <div className="mt-8 soft-card px-4 py-6">
          <p className="mb-6 text-xs font-medium text-slate-600">
            By Interaction Type
          </p>

          <div className="mx-auto h-[260px] w-full max-w-xl">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${entry.name}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 flex items-center justify-center gap-6 text-[11px] text-slate-500">
            {data.map((item, index) => (
              <div key={item.name} className="flex items-center gap-2">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                />
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsPage