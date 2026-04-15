const Logo = () => {
  return (
    <div className="flex items-center">
      <img
        src="/assets/logo.png"
        alt="KeenKeeper"
        className="h-5 w-auto object-contain"
        onError={(e) => {
          e.currentTarget.src = "/assets/logo-xl.png"
        }}
      />
    </div>
  )
}

export default Logo