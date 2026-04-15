const socialLinks = [
  { name: "facebook", src: "/assets/facebook.png" },
  { name: "instagram", src: "/assets/instagram.png" },
  { name: "twitter", src: "/assets/twitter.png" },
]

const Footer = () => {
  return (
    <footer className="footer-green mt-0">
      <div className="container-wrap px-4 py-14 text-center text-white">
        <h2 className="text-4xl font-extrabold">KeenKeeper</h2>

        <p className="mx-auto mt-4 max-w-2xl text-[11px] text-white/70">
          Your personal list of meaningful connections. Browse, track, and nurture the relationships that matter most.
        </p>

        <h3 className="mt-6 text-xs font-semibold">Social Links</h3>

        <div className="mt-3 flex items-center justify-center gap-3">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href="#"
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white"
            >
              <img
                src={item.src}
                alt={item.name}
                className="h-3.5 w-3.5 object-contain"
              />
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 text-[10px] text-white/45 md:flex-row">
          <p>© 2025 KeenKeeper. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer