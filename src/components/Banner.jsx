import { HiOutlineUserAdd } from "react-icons/hi"

const Banner = ({ summary }) => {
  return (
    <section className="px-4 py-10 sm:px-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-slate-800 sm:text-4xl">
          Friends to keep close in your life
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-xs text-slate-400 sm:text-sm">
          Your personal list of meaningful connections. Browse, track, and nurture the friendships that matter most.
        </p>

        <button className="mt-5 inline-flex items-center gap-2 rounded bg-[#215c4b] px-4 py-2 text-[11px] font-medium text-white hover:opacity-95">
          <HiOutlineUserAdd className="text-sm" />
          Add a Friend
        </button>
      </div>

      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
        {summary.map((item) => (
          <div
            key={item.label}
            className="soft-card px-4 py-5 text-center"
          >
            <h3 className="text-xl font-bold text-slate-700">{item.value}</h3>
            <p className="mt-2 text-[11px] text-slate-500">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Banner