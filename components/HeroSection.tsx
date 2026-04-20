export default function HeroSection() {
  return (
    <section id="section-hero" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/do6xlqizt/image/upload/v1773920895/bg_p4eakk.png')] bg-cover bg-center opacity-20" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-center lg:gap-10 xl:gap-14">
          <div className="w-full lg:max-w-2xl flex flex-col items-center lg:items-start">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              สวัสดี, ผม
              <br />
              <div className="inline-flex items-center gap-2 mt-2">
                <span>Narawit Soiaudom</span>
              </div>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-xl lg:max-w-2xl leading-relaxed mb-6">
              A Computer Engineering graduate with a strong foundation in full-stack web development and system design. Experienced in building modern web applications using React.js, Next.js, HTML, CSS, and JavaScript, with hands-on experience in both frontend and backend development.
              Able to develop user-friendly interfaces, integrate APIs, manage databases, and build scalable web applications. Comfortable working in a team to develop new features, improve system performance, and maintain clean, maintainable code.
            </p>

            <div className="flex flex-row gap-3">
              <div className="flex items-center gap-2 px-1 py-1 bg-primary hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-300 text-sm hover:shadow-[0_0_24px_rgb(var(--primary-rgb)/0.4)] hover:-translate-y-2">
                <a
                  href="#section-contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-300 text-sm hover:shadow-[0_0_24px_rgb(var(--primary-rgb)/0.4)] hover:-translate-y-1"
                >
                  <span>ติดต่อ</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </a>
              </div>
              <a
                href="#section-project"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 text-sm hover:-translate-y-2"
              >
                <span>ผลงาน</span>
              </a>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0 shrink-0">
            <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-100 lg:h-full rounded-3xl overflow-hidden border-2 border-primary/20 shadow-[0_0_60px_rgb(var(--primary-rgb)/0.1)]">
              <img src="/profile.jpg" alt="Narawit" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 bg-[#12121a] border border-primary/20 rounded-xl px-4 py-2 shadow-xl">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs text-gray-400 whitespace-nowrap">Full-Stack Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}