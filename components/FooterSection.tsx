export default function FooterSection() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="border-t border-white/6 py-6 sm:py-8 px-6 sm:px-10">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-around gap-3">
                {/* <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-white">NARAWIT</span>
                </div> */}
                <p className="text-xs text-gray-600">&copy; {currentYear} Narawit Soiaudom</p>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-gray-500">
                        Currently Open to Opportunities
                    </span>
                </div>
            </div>
        </footer>
    )
}