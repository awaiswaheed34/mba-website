const AboutUsSection = () => {
    return (
        <section className="flex flex-col justify-center items-center mx-auto p-16" id="about">
            <div className="w-4/5">
                <p className="text-lg text-gray-700 mb-6">
                    <b>
                        Unlock the mysterious world of MBA applications without breaking the
                        bank!{" "}
                    </b>{" "}
                    Forget shelling out thousands on an MBA coach – we've got your back with
                    a budget-friendly alternative (or complement) to those sky-high
                    consulting fees.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                    <b>
                        Dive into successful applicants’ essays to see the real storytelling
                        skills you need!
                    </b>{" "}
                    Embark on a journey behind the scenes, where real applicants reveal the
                    ins and outs of their triumphant MBA narratives, how they wowed the
                    admissions gods and secured a spot in their dream MBA program. No biased
                    consultants here – just authentic, unfiltered tales from the MBA
                    battlefield.
                </p>
                <p className="text-lg text-gray-700">
                    <b>
                        {" "}
                        Discover the secrets of triumph from individuals who walked a similar
                        path pre-MBA.
                    </b>{" "}
                    Whether you're a number-crunching finance guru or a consultant
                    mastermind, we've got essays from people with a similar background [yes,
                    seeing how a veteran sold her deployment experience to get into Harvard
                    is not helpful if you don’t have experience].
                </p>
            </div>
        </section>
    );
};


export default AboutUsSection;