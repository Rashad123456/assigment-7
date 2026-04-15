const LoadingSpinner = () => {
  return (
    <div className="flex min-h-[300px] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-slate-200 border-t-brand" />
        <p className="text-sm font-medium text-slate-500">Loading friends data...</p>
      </div>
    </div>
  )
}

export default LoadingSpinner
