import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <section className="flex min-h-[60vh] items-center justify-center">
      <div className="max-w-lg rounded-[32px] bg-white p-10 text-center shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">404 Error</p>
        <h1 className="mt-4 text-4xl font-extrabold text-dark">Page not found</h1>
        <p className="mt-4 text-slate-500">
          The page you are looking for does not exist or may have been moved. Return to the home page and continue exploring your dashboard.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-bold text-white"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
