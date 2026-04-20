const contacts = [
    { icon: 'https://img.icons8.com/ios-filled/100/ffffff/phone.png', label: 'Phone', value: '098-184-8532', href: 'tel:0981848532' },
    { icon: 'https://res.cloudinary.com/do6xlqizt/image/upload/v1773920728/mdi--gmail_rsnsn0.png', label: 'Email', value: 'narawit532@gmail.com' },
    { icon: 'https://res.cloudinary.com/do6xlqizt/image/upload/v1773920729/line-app-logo-block_ek3x9i.png', label: 'Line', value: 'narawit101' },
    { icon: 'https://res.cloudinary.com/do6xlqizt/image/upload/v1773920729/fe--instagram_bzhyko.png', label: 'Instagram', value: 'iiceee.n', href: 'https://www.instagram.com/iiceee.n/' },
    { icon: 'https://res.cloudinary.com/do6xlqizt/image/upload/v1773920729/--facebook_h0f6hr.png', label: 'Facebook', value: 'Narawit Soiaudom', href: 'https://www.facebook.com/iceXD' },
    { icon: 'https://cdn-icons-png.flaticon.com/512/25/25231.png', label: 'GitHub', value: 'narawit101', href: 'https://github.com/narawit101', iconClass: 'filter invert' },
]

export default function ContactSection() {
    return (
        <section id="section-contact" className="scroll-mt-20 py-10 sm:py-12 px-6 sm:px-10 relative">
            <div className=" absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />

            <div className="relative z-10 max-w-3xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl font-bold mt-3 text-white">Contact</h2>
                    <span className="text-primary text-xs font-semibold tracking-[0.25em] uppercase">Get In Touch</span>
                    <div className="mt-4 h-[3px] w-12 bg-primary rounded-full mx-auto" />
                </div>

                <div className="hover:border-primary/20  bg-[#12121a] rounded-2xl border border-white/6 overflow-hidden">
                    <div className="flex items-center gap-2 px-4 sm:px-5 py-3 border-b border-white/6 bg-white/2">
                        <span className="w-3 h-3 rounded-full bg-red-500/80" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <span className="w-3 h-3 rounded-full bg-green-500/80" />
                        <span className="ml-3 text-xs text-gray-500 font-mono">contact-info</span>
                    </div>

                    <div className="p-4 sm:p-6 lg:p-8">
                        <div className="mb-5">
                            <span className="terminal-type font-mono text-xs sm:text-sm text-gray-500">$ cat contact.json</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {contacts.map((item) => (
                                <div key={item.label} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:-translate-y-1  transition-transform duration-500 bg-white/3 border border-white/4 hover:border-primary/20 ">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                        <img src={item.icon} alt={item.label} className={`w-4 h-4 sm:w-5 sm:h-5 ${item.iconClass ?? ''}`} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[10px] sm:text-[11px] text-gray-500 uppercase tracking-wider font-mono">{item.label}</p>
                                        {item.href ? (
                                            <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-gray-300 hover:text-primary-400 transition-colors truncate block">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-xs sm:text-sm text-gray-300 truncate">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}