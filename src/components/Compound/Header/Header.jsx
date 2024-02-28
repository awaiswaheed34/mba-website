const Header = () => {
    return (
        <nav className="bg-[#665eff] sticky top-0 z-50">
            <div className="w-11/12 mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <a className="flex items-center py-4 px-2" href="/">
                                <span className="font-semibold text-white text-lg">
                                    MBA Essay Genius
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        <a
                            className="py-4 px-2  text-white hover:text-green-500 font-semibold "
                            href="/#about"
                        >
                            About Us
                        </a>
                        <a
                            className="py-4 px-2  text-white font-semibold hover:text-green-500 onClick:border-b-4 border-green-500 transition duration-300"
                            href="/#services"
                        >
                            Services
                        </a>
                        <a
                            className="py-4 px-2  text-white font-semibold hover:text-green-500 transition duration-300"
                            href="/#faqs"
                        >
                            FAQs
                        </a>
                        <a
                            className="py-4 px-2  text-white font-semibold hover:text-green-500 transition duration-300"
                            href="/essayBank"
                        >
                            Essay Bank
                        </a>
                        <a
                            className="py-4 px-2  text-white font-semibold hover:text-green-500 transition duration-300"
                            href="/mbaGraduates"
                        >
                            MBA Graduates
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;