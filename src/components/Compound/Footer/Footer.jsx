
const Footer = () => {
    return (
        <footer className="bg-black p-16">
            <div className="container flex  justify-between items-center mx-auto px-6 py-4">
                <div className="flex flex-col lg:justify-end text-white ">
                    © 2024 MBA Essay Genius. All rights reserved
                </div>
                <div className="flex items-right">
                    <div className="flex flex-col lg:justify-end">
                        <div className="hidden md:flex lg:flex-row py-4  lg:justify-end ">
                            <a
                                className="py-1 px-2   text-white font-semibold "
                                href="#about"
                            >
                                About Us
                            </a>
                            <a
                                className="py-1 px-2  text-white font-semibold hover:text-green-500 onClick:border-b-4 border-green-500 transition duration-300"
                                href="#services"
                            >
                                Services
                            </a>
                            <a
                                className="py-1 px-2  text-white font-semibold hover:text-green-500 transition duration-300"
                                href="/#faqs"
                            >
                                FAQs
                            </a>

                            <a
                                className="py-1 px-2  text-white font-semibold hover:text-green-500 transition duration-300"
                                href="/essayBank"

                            >
                                Essay Bank
                            </a>
                            <a
                                className="py-1 px-2  text-white font-semibold hover:text-green-500 transition duration-300"
                                href="/mbaGraduates"
                            >
                                MBA Graduates
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;