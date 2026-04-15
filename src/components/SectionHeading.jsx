const SectionHeading = ({ title, subtitle }) => {
  return (
    <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="text-2xl font-extrabold text-dark sm:text-3xl">{title}</h2>
        {subtitle ? <p className="mt-2 text-sm text-slate-500">{subtitle}</p> : null}
      </div>
    </div>
  )
}

export default SectionHeading
