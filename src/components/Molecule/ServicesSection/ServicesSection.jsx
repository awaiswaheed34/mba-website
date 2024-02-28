const ServicesSection = () => {
    return (
        <section className="flex flex-col justify-center items-center mx-auto px-6 py-12 my-8" id="services">
            <div className="w-4/5">
                <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
                <div className=" flex gap-4 mb-6">
                    <div className="bg-white shadow-lg rounded-lg p-6 col-start-1">
                        <div className="flex flex-row justify-between items-center pb-6">
                            <h3 className="text-2xl font-bold mb-2">Essay Revision</h3>
                            <p className="text-lg text-gray-700">
                                <b>$49 per revision</b>
                            </p>
                        </div>
                        <p className="text-gray-600"><div>
                            <b>Struggling to turn your MBA essay from 'meh' to
                                'marvelous'?</b> For just $49, our essay revision service is your secret weapon! I
                            magine a dream team of former MBA whizzes,
                            armed with red pens and killer instincts
                            , ready to transform your essay from drab to fab. We don't just pinpoint typos;
                            we tell you how to add the zing, zap, and zoom your essay needs to stand out.
                            Think of us as your personal trainers for your words – except we promise no heavy lifting.
                            <b>Say goodbye to sleepless nights and hello to a masterpiece.</b>
                            Let's give the admissions committee something to talk about!
                        </div></p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 col-start-2 mx-5">
                        <div className="flex flex-row justify-between items-center pb-6">
                            <h3 className="text-2xl font-bold mb-2">Essay Bank</h3>
                            <b><p className="text-lg text-gray-700 mb-6">$29 per revision</p></b>
                        </div>
                        <p className="text-gray-600"><div>
                            <b>While your profile is one-of-a-kind, past successful MBA applicants share similarities with your background.</b> Let their success stories inspire your own narrative!
                            Navigate through our extensive essay library to find the perfect match for your background. <b>Explore our Essay Bank, where individual gems await at just $29 each.</b>
                            Why settle for generic when you can resonate with someone who's walked a similar path? Your quest for an outstanding essay begins here, where resonance meets excellence! 🚀📝

                        </div></p>
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="bg-white shadow-lg rounded-lg my-1 p-6">
                        <div className="flex flex-row justify-between items-center pb-6">
                            <h3 className="text-2xl font-bold">Mock Interviews</h3>
                            <p className="text-lg text-gray-700">
                                <b> From $99</b> (or success fee only)
                            </p>
                        </div>
                        <p className="text-gray-600">
                            Gear up for your dream school interview like a pro!{" "}
                            <b>
                                {" "}
                                Dive into our world of affordable mock interviews ($99 each) or
                                grab our fantastic risk-free deal
                            </b>{" "}
                            ($999 for 3 mock interviews that not only sharpen your skills but
                            also come with a guarantee. That's right, if your dream school
                            doesn't extend that coveted offer, we'll gladly refund the
                            investment. It's a win-win, or as we like to call it, a
                            win-try-and-get-your-money-back)! Meet our interview experts –
                            real MVPs who aced their own interviews and are here to pass on
                            the secrets. Don't leave your dreams to chance, practice with
                            those who've been there, done that, and are ready to help you nail
                            it too. Let's turn those interview nerves into interview cheers!
                            🚀💼
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg my-1 p-6">
                        <div className="flex flex-row justify-between items-center pb-6">
                            <h3 className="text-2xl font-bold mb-2">Recommendation Letters</h3>
                            <p className="text-lg text-gray-700 font-bold mb-6">
                                $49 per letter
                            </p>
                        </div>
                        <p className="text-gray-600">
                            <b>
                                Feel like your recommenders need a nudge in the right direction?{" "}
                            </b>
                            Why not inspire them with real samples that scored big? Snag our
                            recommendation letter samples for just $49 each! Some savvy
                            applicants crafted these gems themselves, or maybe their mentors
                            spilled the secret sauce. Either way, it's top-notch inspiration
                            for your recommenders to shine! 🌟📄
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg my-1 p-6">
                        <div className="flex flex-row justify-between items-center pb-6">
                            <h3 className="text-2xl font-bold mb-2">Holistic Review</h3>
                            <p className="text-lg text-gray-700 mb-6">
                                <b>From $299</b> (or success fee only)
                            </p>
                        </div>
                        <p className="text-gray-600"><div>
                            <b>Ready to give your application the VIP treatment?</b> Dive into our Holistic Review service! For $299 (or $999 but you only pay if you get an offer from your dream school), our experts <b>will scrutinize every nook and cranny of your application, ensuring it's a standout in the admissions lineup.</b> We're not fortune tellers, but we know what catches eyes and leaves a lasting impression. <b>Let's turn your application into a masterpiece – a symphony of experiences, achievements, and personality.</b> Because it's not just about applying; it's about making a statement. Don't leave it to chance; let's make your entire application unforgettable! 🌟🎓
                        </div></p>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default ServicesSection;