import Avatar from "@mui/material/Avatar";
import "./tailwind.css";
import MyForm from "./Form";

const ReviewItem = ({ text }) => {
  return <li>{text}</li>;
};

const FaqItem = ({ question, answer }) => {
  return (
    <details className="shadow-lg rounded-lg p-6">
      <summary className="cursor-pointer text-lg font-semibold">
        {question}
      </summary>
      <p className="mt-2 text-gray-600">{answer}</p>
    </details>
  );
};

const TestimonialItem = ({ image, name, rating, review }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center">
        <Avatar>
          <img src={image} />
        </Avatar>

        <h3 className="text-xl items-center p-5 font-bold ">{name}</h3>
      </div>
      <p className="text-yellow-500 mb-4 font-extrabold text-xl">{rating}</p>
      <p className="text-gray-600">{review}</p>
    </div>
  );
};

const AboutUsSection = () => {
  return (
    <section className="container mx-auto px-6 py-12" id="about">
      <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
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
    </section>
  );
};

const ImageGallery = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div>
        <b><p>Trusted by non-traditional applicants and employees from leading pre-MBA firms</p></b>
      </div>
      <div className="flex justify-center items-center p-4 w-4/5">
        <img src="i.png" alt="Image 1" style={{ width: '10%', height: '90%' }} className="mr-4" />
        <img src="j1.png" alt="Image 2" style={{ width: '12%', height: '90%' }} className="mr-4" />
        <img src="k.png" alt="Image 3" style={{ width: '12%', height: '90%' }} className="mr-4" />
        <img src="l.png" alt="Image 4" style={{ width: '12%', height: '90%' }} className="mr-4" />
        <img src="m1.png" alt="Image 5" style={{ width: '12%', height: '90%' }} className="mr-4" />
        <img src="n.png" alt="Image 6" style={{ width: '12%', height: '90%' }} className="mr-4" />
        <img src="o.png" alt="Image 7" style={{ width: '12%', height: '90%' }} />
      </div>
    </div>
  );
};

function Matrix() {
  return (
    <div className="flex justify-center">
      <div className="flex w-10/12">
        {/* <div className=" inset-0 flex items-center">
          <div className="w-0 h-full border-r border-gray-300 absolute left-1/2 transform -translate-x-1/2" />
          <div className="w-0 h-0 border-t border-l transparent border-solid border-gray-300 absolute left-1/2 transform -translate-x-1/2" />
        </div> */}

        {/* Top label for "Value" */}
        <div className="absolute left-0 top-6 -translate-y-full transform">
          <span className="bg-white px-2 text-sm text-gray-500">Value</span>
        </div>
        <div className="p-20">
          <div className="border-r h-full border-8 border-blue-500"></div>
          value
        </div>
        <div className="relative bg-white p-6">
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center"
          >
            <div className="w-full border-t  border-gray-300" />
          </div>
          <div className="absolute inset-0 flex justify-center">
            <div className="h-full border-r border-gray-300" />
          </div>
          <div className="absolute left-0 top-6 -translate-y-full transform">
            <span className="bg-white px-2 text-sm text-gray-500">Value</span>
          </div>
          <div className="absolute bottom-6 right-0 -translate-x-full transform">
            <span className="bg-white px-2 text-sm text-gray-500">Price</span>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-[#6b5de7] text-white px-4 py-2 rounded shadow">
                <p className="font-bold">Best value-for-money</p>
              </div>
              <div className="mt-4 p-4 bg-gray-100 rounded shadow text-center">
                <p className="font-semibold">Insert logo</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="mt-4 p-4 bg-gray-100 rounded shadow text-center">
                <p className="font-semibold">MBA Coaches – the Good</p>
                <p className="text-xs mt-2">
                  Help in your application shouldn't be an expensive luxury...
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="mt-4 p-4 bg-gray-100 rounded shadow text-center">
                <p className="font-semibold">
                  Feedback from your girl/boyfriend
                </p>
                <p className="text-xs mt-2">
                  That's why people say “you get what you pay for”...
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="mt-4 p-4 bg-gray-100 rounded shadow text-center">
                <p className="font-semibold">
                  MBA Coaches – the Bad and the Ugly
                </p>
                <p className="text-xs mt-2">
                  Expensive and unhelpful doesn't sound good
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const ServicesSection = () => {
  return (
    <section className="container mx-auto px-6 py-12" id="services">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className=" flex gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 col-start-1 mx-3">
          <h3 className="text-2xl font-bold mb-2">Essay Revision</h3>
          <p className="text-lg text-gray-700 mb-6">
            <b>$49 per revision</b>
          </p>
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
        <div className="bg-white shadow-lg rounded-lg p-6 col-start-2 mx-3">
          <h3 className="text-2xl font-bold mb-2">Essay Bank</h3>
          <b><p className="text-lg text-gray-700 mb-6">$29 per revision</p></b>
          <p className="text-gray-600"><div>
          <b>While your profile is one-of-a-kind, past successful MBA applicants share similarities with your background.</b> Let their success stories inspire your own narrative!
Navigate through our extensive essay library to find the perfect match for your background. <b>Explore our Essay Bank, where individual gems await at just $29 each.</b>
Why settle for generic when you can resonate with someone who's walked a similar path? Your quest for an outstanding essay begins here, where resonance meets excellence! 🚀📝

</div></p>
        </div>
      </div>
      <div className="">
        <div className="bg-white shadow-lg rounded-lg my-1 p-6">
          <h3 className="text-2xl font-bold mb-2">Mock Interviews</h3>
          <p className="text-lg text-gray-700 mb-6">
            <b> From $99</b> (or success fee only)
          </p>
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
          <h3 className="text-2xl font-bold mb-2">Recommendation Letters</h3>
          <p className="text-lg text-gray-700 font-bold mb-6">
            $49 per letter
          </p>
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
          <h3 className="text-2xl font-bold mb-2">Holistic Review</h3>
          <p className="text-lg text-gray-700 mb-6">
            <b>From $299</b> (or success fee only)
          </p>
          <p className="text-gray-600"><div>
          <b>Ready to give your application the VIP treatment?</b> Dive into our Holistic Review service! For $299 (or $999 but you only pay if you get an offer from your dream school), our experts <b>will scrutinize every nook and cranny of your application, ensuring it's a standout in the admissions lineup.</b> We're not fortune tellers, but we know what catches eyes and leaves a lasting impression. <b>Let's turn your application into a masterpiece – a symphony of experiences, achievements, and personality.</b> Because it's not just about applying; it's about making a statement. Don't leave it to chance; let's make your entire application unforgettable! 🌟🎓
          </div></p>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="container mx-auto px-6 py-12" id="testimonials">
      <h2 className="text-3xl font-bold text-center mb-8">
        Don’t take our word for it…
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialItem
            key={index}
            image={testimonial.image}
            name={testimonial.name}
            rating={testimonial.rating}
            review={testimonial.review}
          />
        ))}
      </div>
    </section>
  );
};

const FaqsSection = ({ faqs }) => {
  return (
    <section className="container mx-auto px-6 py-12" id="faqs">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

const TopHeader = () => {
  return (
    <div class="hidden flex items-center justify-center bg-indigo-900 h-10 w-full space-x-10 lg:flex">
      <div className="flex w-10/12 justify-between">
        <div class="flex text-sm text-white">
          <svg
            class="w-5 h-5 w-3 h-3 text-green-500 mr-1.5"
            fill="currentColor"
            viewbox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              fill-rule="evenodd"
            ></path>
          </svg>
          500+ top-quality essays
        </div>
        <div class="flex text-sm text-green-500 space-x-2">
          ★★★★★
          <div class="flex text-white ml-2">Used by 2,468 happy clients</div>
        </div>
        <div class="flex text-sm text-white">
          <svg
            class="w-5 h-5 w-3 h-3 text-green-500 mr-1.5"
            fill="currentColor"
            viewbox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              fill-rule="evenodd"
            ></path>
          </svg>
          600+ clients accepted into top business schools
        </div>
      </div>
    </div>
  );
};

const HelpedSection = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <b><p>Trusted by non-traditional applicants and employees from leading pre-MBA firms</p></b>
      </div>
      <div className="flex justify-center items-center p-4 w-4/5">
        <img src="e1.png" alt="Image 5" style={{ width: '15%', height: '40%' }} className="mr-4" />
        <img src="a.png" alt="Image 1" style={{ width: '15%', height: '25%' }} className="mr-4" />
        <img src="b.png" alt="Image 2" style={{ width: '15%', height: '60%' }} className="mr-4" />
        <img src="c1.png" alt="Image 3" style={{ width: '15%', height: '25%' }} className="mr-4" />
        <img src="d.png" alt="Image 4" style={{ width: '15%', height: '60%' }} className="" />
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <nav className="bg-[#665eff] sticky top-0 z-50">
      <div className="w-11/12 mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a className="flex items-center py-4 px-2" href="/">
                <img
                  alt="Logo"
                  className="h-8 w-8 mr-2"
                  src="Logo - white background.png"
                />
                <span className="font-semibold text-white text-lg">
                  Genius MBA Essay
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

export const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="container flex  justify-between items-center mx-auto px-6 py-4">
        <div className="flex flex-col lg:justify-end text-white ">
          © 2024 MBA Essay Genius. All rights reserved
        </div>
        <div className="flex items-right">
          <div className="flex flex-col lg:justify-end">
            <div className="hidden md:flex lg:flex-col py-4  lg:justify-end ">
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

function HomePage() {
  const reviews = ["Great product!", "Excellent service!", "Love it!"];

  const faqs = [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    { question: "Question 3", answer: "Answer 3" },
    { question: "Question 4", answer: "Answer 4" },
    { question: "Question 5", answer: "Answer 5" },
    { question: "Question 6", answer: "Answer 6" },
    { question: "Question 7", answer: "Answer 7" },
    { question: "Question 8", answer: "Answer 8" },
    { question: "Question 9", answer: "Answer 9" },
    { question: "Question 10", answer: "Answer 10" },
  ];

  const testimonials = [
    {
      image: "1.png",
      name: "GSB Class of 2024",
      rating: "★★★★★",
      review:
        "I was totally lost when I started drafting my essay. After reading five essays from successful applicants with a similar background, I got many ideas on how to best share my personal story. 100% recommend MBA Essay Genius!",
    },
    {
      image: "2.png",
      name: "HBS Class of 2025",
      rating: "★★★★★",
      review:
        "Having a PE background, I know that companies offering services on a 'success fee' basis truly believe in their value. I did the mock interviews for free and was super happy to pay MBA Essay Genius after getting the 'YES!' from Harvard.",
    },
    {
      image: "3.png",
      name: "HBS Class of 2024",
      rating: "★★★★★",
      review:
        "The essay bank is such a great idea. I know MBB consultants share resources, but as someone from a non-traditional background, it was super helpful to see how spectacular essays from successful MBA applicants are.",
    },
    {
      image: "4.png",
      name: "Wharton Class of 2025",
      rating: "★★★★★",
      review:
        "This was a game-changer for me! I purchased a few essay samples and then the essay revision service. I 100% recommend it. Their comprehensive review and suggestions helped me articulate my story clearly, making my application much stronger.",
    },
    {
      image: "5.png",
      name: "HBS Class of 2025",
      rating: "★★★★★",
      review:
        "I was impressed by the breadth of approaches to Harvard’s essay (it was kind of addictive, tbh!). It was great to read different personal stories from previous MBA graduates and understand which style suited me best.",
    },
    {
      image: "6.png",
      name: "GSB Class of 2025",
      rating: "★★★★★",
      review:
        "A no-brainer purchase. It's super cheap and highly valuable! I honestly think everyone considering applying should read a few essays before starting their application.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <TopHeader />
      <Header />
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
              <span>Proves Essays, Proven Success</span>
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
      <main className="mb-auto">
        <HelpedSection />
        <Matrix />
        <AboutUsSection />
        <ServicesSection />
        <ImageGallery/>
        <TestimonialsSection testimonials={testimonials} />
        <FaqsSection faqs={faqs} />
      </main>
      <Footer />
    </div>
  );
}
export default HomePage;
