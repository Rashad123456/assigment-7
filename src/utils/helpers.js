export const getStatusClass = (status) => {
  if (status === "overdue") return "bg-red-100 text-red-600"
  if (status === "almost due") return "bg-amber-100 text-amber-600"
  return "bg-emerald-100 text-emerald-700"
}

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}