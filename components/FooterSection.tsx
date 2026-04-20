export default function FooterSection() {
    const quickLinks = [
        { label: 'Home', href: '#section-hero' },
        { label: 'Tech Stack', href: '#section-stack' },
        { label: 'Projects', href: '#section-project' },
        { label: 'Contact', href: '#section-contact' },
    ]

    const shortcutContacts = [
        {
            icon: 'LI',
            title: 'Line Chat',
            value: '@narawit101',
            href: '#section-contact',
        },
        {
            icon: 'FB',
            title: 'Facebook',
            value: 'Narawit Soiaudom',
            href: 'https://www.facebook.com/iceXD',
            external: true,
        },
        {
            icon: 'PH',
            title: 'Phone',
            value: '098 184 8532',
            href: 'tel:0981848532',
        },
        {
            icon: 'EM',
            title: 'E-Mail',
            value: 'narawit532@gmail.com',
            href: 'mailto:narawit532@gmail.com',
        },
    ]

    const serviceLinks = [
        'Next.js website development',
        'Admin dashboard and internal tools',
        'REST API and database architecture',
        'UX/UI refinement and optimization',
    ]

    const socialLinks = [
        { label: 'GitHub', href: 'https://github.com/narawit101', external: true },
        { label: 'Instagram', href: 'https://www.instagram.com/iiceee.n/', external: true },
        { label: 'Facebook', href: 'https://www.facebook.com/iceXD', external: true },
    ]

    const SocialIcon = ({ label }: { label: string }) => {
        if (label === 'GitHub') {
            return (
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
                    <path d="M12 .5C5.65.5.5 5.65.5 12.01c0 5.09 3.3 9.41 7.88 10.94.58.11.79-.25.79-.56v-2.16c-3.2.7-3.88-1.36-3.88-1.36-.52-1.31-1.28-1.66-1.28-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.76 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.56-.29-5.26-1.28-5.26-5.72 0-1.27.46-2.31 1.2-3.12-.12-.29-.52-1.47.11-3.07 0 0 .98-.31 3.2 1.19.93-.26 1.92-.39 2.91-.4.99 0 1.99.14 2.92.4 2.21-1.5 3.19-1.19 3.19-1.19.64 1.6.24 2.78.12 3.07.75.81 1.2 1.85 1.2 3.12 0 4.45-2.7 5.43-5.28 5.71.42.36.78 1.08.78 2.19v3.25c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z" />
                </svg>
            )
        }

        if (label === 'Instagram') {
            return (
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                    <circle cx="12" cy="12" r="4.2" />
                    <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
                </svg>
            )
        }

        return (
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
                <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.12 11.93v-8.44H7.08v-3.5h3.04V9.41c0-3.02 1.79-4.69 4.54-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.5 0-1.96.93-1.96 1.89v2.24h3.34l-.53 3.5h-2.81V24C19.61 23.08 24 18.09 24 12.07Z" />
            </svg>
        )
    }

    const currentYear = new Date().getFullYear()

    return (
        <footer className="border-t border-white/6 bg-[#0a0a12] pb-4 px-4">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl shadow-[0_22px_70px_rgba(0,0,0,0.35)]">
                {/* <div className="flex flex-col gap-5 bg-white/3 px-6 py-7 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-white sm:text-3xl">Available for Full-stack Web Projects</h3>
                        <p className="mt-2 text-base font-semibold text-primary-400">Open for freelance, product, and long-term collaboration</p>
                    </div>

                    <a
                        href="#section-contact"
                        className="inline-flex h-11 items-center justify-center rounded-md border border-primary/40 bg-primary/90 px-6 text-sm font-semibold text-white transition-colors hover:bg-primary"
                    >
                        Contact Me
                    </a>
                </div> */}

                <div className="grid gap-8 px-10 py-8 xl:px-0 lg:grid-cols-4">
                    <div>
                        <h4 className="text-base font-bold text-primary">Narawit</h4>
                        <p className="mt-3 text-sm leading-relaxed text-gray-300">
                            I build practical web products with a strong focus on user experience, performance, and maintainable code.
                        </p>
                        <p className="mt-4 border-l-2 border-primary pl-3 text-sm font-medium italic text-gray-200">
                            Clean interface, reliable architecture, and long-term scalability.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-base font-bold text-primary">Services</h4>
                        <ul className="mt-3 space-y-2 text-sm text-gray-300">
                            {serviceLinks.map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="mt-0.5 text-gray-500">›</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-base font-bold text-primary">Navigation</h4>
                        <ul className="mt-3 space-y-2 text-sm text-gray-300">
                            {quickLinks.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href} className="inline-flex items-center gap-2 transition-colors hover:text-primary-400">
                                        <span className="text-gray-500">›</span>
                                        <span>{item.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-base font-bold text-primary">Contact</h4>
                        <div className="mt-3 space-y-2 text-sm text-gray-300">
                            <p>Tel: <a href="tel:0981848532" className="transition-colors hover:text-primary-400">098 184 8532</a></p>
                            <p>E-Mail: <a href="mailto:narawit532@gmail.com" className="transition-colors hover:text-primary-400">narawit532@gmail.com</a></p>
                            <p>Line: <span className="">@narawit101</span></p>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    target={item.external ? '_blank' : undefined}
                                    rel={item.external ? 'noopener noreferrer' : undefined}
                                    aria-label={item.label}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/3 text-white transition-colors hover:border-primary/35 hover:text-primary-400"
                                >
                                    <SocialIcon label={item.label} />
                                    <span className="sr-only">{item.label}</span>
                                </a>
                            ))}
                        </div>

                    </div>
                </div>
                {/* <div className="flex flex-col gap-3 border-t border-white/6 px-6 py-4 text-xs text-gray-500 sm:px-8 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-wrap gap-4 uppercase tracking-wide">
                        <span>Terms and Conditions</span>
                        <span>Privacy Policy</span>
                        <span>Refund</span>
                    </div>
                    <p>&copy; {currentYear} Narawit Soiaudom</p>
                </div> */}
            </div>
        </footer>
    )
}