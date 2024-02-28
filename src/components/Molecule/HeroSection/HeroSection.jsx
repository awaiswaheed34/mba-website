const HeroSection = ({ title, subtitle, image }) => {
    return (

        <header className="bg-[#665eff] section-1 text-white text-center lg:text-left">
            <div className="container mx-auto w-9/12 flex flex-col lg:flex-row items-center .justify-items-end">
                <div className="lg:w-3/4">
                    <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-none">
                        Unlock the secrets to a successful MBA application
                    </h1>
                    <p className="text-xl lg:text-2xl mt-6 font-light">
                        Dive into our database of 500+ essays from rockstar MBA applicants
                        & join our community of top business school MBAs
                    </p>
                    <div className="mt-8 md:mt-12">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg">
                            <a href="/essayBank"> MBA Essay Bank</a>
                        </button>
                    </div>
                    <div className="mt-4">
                        <span>Proven Essays, Proven Success</span>
                    </div>
                </div>
                {/* move this to the right */}
                <div className="mt-12 lg:mt-0 lg:w-1/4 justify-items-end">
                    <img
                        alt="Mobile App"
                        className="rounded-3xl"
                        height="100"
                        src="https://s3.amazonaws.com/www.starterstory.com/production/images/0ca21f78bae69f9b"
                        style={{
                            aspectRatio: "262/500",
                            objectFit: "fit",
                        }}
                        width="262"
                    />
                </div>
            </div>
        </header>
    );
}

export default HeroSection;