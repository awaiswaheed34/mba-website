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
          <Avatar src="//s3.amazonaws.com/www.starterstory.com/users/avatars/000/014/296/thumbnail/nadeef-ahmad.jpg?1688788968" />{" "}
          /{" "}
        </Avatar>

        <h3 className="text-xl items-center p-5 font-bold ">{name}</h3>
      </div>
      <p className="text-yellow-500 mb-4">{rating}</p>
      <p className="text-gray-600">{review}</p>
    </div>
  );
};

const AboutUsSection = () => {
  return (
    <section className="container mx-auto px-6 py-12" id="about">
      <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
      <p className="text-lg text-gray-700 mb-6">
        <b>Unlock the mysterious world of MBA applications without breaking the
        bank! </b> Forget shelling out thousands on an MBA coach – we've got your
        back with a budget-friendly alternative (or complement) to those
        sky-high consulting fees.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        <b>Dive into successful applicants’ essays to see the real storytelling
        skills you need!</b> Embark on a journey behind the scenes, where real
        applicants reveal the ins and outs of their triumphant MBA narratives,
        how they wowed the admissions gods and secured a spot in their dream MBA
        program. No biased consultants here – just authentic, unfiltered tales
        from the MBA battlefield.
      </p>
      <p className="text-lg text-gray-700">
        <b> Discover the secrets of triumph from individuals who walked a similar
        path pre-MBA.</b> Whether you're a number-crunching finance guru or a
        consultant mastermind, we've got essays from people with a similar
        background [yes, seeing how a veteran sold her deployment experience to
        get into Harvard is not helpful if you don’t have experience].
      </p>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section className="container mx-auto px-6 py-12" id="services">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="flex flex-col lg:flex-row">
        <div className="flex lg:w-5/12">
          <div className="bg-white shadow-lg rounded-lg p-6 ">
            <h3 className="text-2xl font-bold mb-2">Essay Revision</h3>
            <p className="text-lg text-gray-700 mb-6"><b>$49 per revision</b></p>
            <p className="text-gray-600">
              Struggling to turn your MBA essay from 'meh' to 'marvelous'? For
              just $49, our essay revision service is your secret weapon!
              Imagine a dream team of former MBA whizzes, armed with red pens
              and killer instincts, ready to transform your essay from drab to
              fab. We don't just pinpoint typos; we tell you how to add the
              zing, zap, and zoom your essay needs to stand out. Think of us as
              your personal trainers for your words – except we promise no heavy
              lifting. Say goodbye to sleepless nights and hello to a
              masterpiece. Let's give the admissions committee something to talk
              about!
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Essay Revision</h3>
            <p className="text-lg text-gray-700 mb-6">$40 per revision</p>
            <p className="text-gray-600">
              Struggling to turn your MBA essay from 'meh' to 'marvelous'? For
              just $49, our essay revision service is your secret weapon!
              Imagine a dream team of former MBA whizzes, armed with red pens
              and killer instincts, ready to transform your essay from drab to
              fab. We don't just pinpoint typos; we tell you how to add the
              zing, zap, and zoom your essay needs to stand out. Think of us as
              your personal trainers for your words – except we promise no heavy
              lifting. Say goodbye to sleepless nights and hello to a
              masterpiece. Let's give the admissions committee something to talk
              about!
            </p>
          </div>
        </div>
        <div className="grid grid-rows-3 gap-6 lg:w-7/12">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Mock Interviews</h3>
            <p className="text-lg text-gray-700 mb-6">
              <b> From $99</b> (or success fee only)
            </p>
            <p className="text-gray-600">
              Gear up for your dream school interview like a pro! <b> Dive into our
              world of affordable mock interviews ($99 each) or grab our
              fantastic risk-free deal</b> ($999 for 3 mock interviews that not only
              sharpen your skills but also come with a guarantee. That's right,
              if your dream school doesn't extend that coveted offer, we'll
              gladly refund the investment. It's a win-win, or as we like to
              call it, a win-try-and-get-your-money-back)! Meet our interview
              experts – real MVPs who aced their own interviews and are here to
              pass on the secrets. Don't leave your dreams to chance, practice
              with those who've been there, done that, and are ready to help you
              nail it too. Let's turn those interview nerves into interview
              cheers! 🚀💼
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Recommendation Letters</h3>
            <p className="text-lg text-gray-700 font-bold mb-6">
              $49 per letter
            </p>
            <p className="text-gray-600">
              <b>Feel like your recommenders need a nudge in the right direction? </b>
               Why not inspire them with real samples that scored big? Snag our
              recommendation letter samples for just $49 each! Some savvy
              applicants crafted these gems themselves, or maybe their mentors
              spilled the secret sauce. Either way, it's top-notch inspiration
              for your recommenders to shine! 🌟📄
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Holistic Review</h3>
            <p className="text-lg text-gray-700 mb-6"><b>From $299</b> (or success fee only)</p>
            <p className="text-gray-600">
              Gear up for your dream school interview like a pro! Dive into our
              world of affordable mock interviews ($99 each) or grab our
              fantastic risk-free deal ($999 for 3 mock interviews that not only
              sharpen your skills but also come with a guarantee. That's right,
              if your dream school doesn't extend that coveted offer, we'll
              gladly refund the investment. It's a win-win, or as we like to
              call it, a win-try-and-get-your-money-back)! Meet our interview
              experts – real MVPs who aced their own interviews and are here to
              pass on the secrets. Don't leave your dreams to chance, practice
              with those who've been there, done that, and are ready to help you
              nail it too. Let's turn those interview nerves into interview
              cheers! 🚀💼
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="container mx-auto px-6 py-12" id="testimonials">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialItem
            key={index}
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
          4,418+ online business case studies
        </div>
        <div class="flex text-sm text-green-500 space-x-2">
          ★★★★★
          <div class="flex text-white ml-2">Used by 12,568 happy customers</div>
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
          $10,842,423,564+ total revenue of all case studies
        </div>
      </div>
    </div>
  );
};

const HelpedSection = () => {
  return (
    <div className="flex flex-col w-full items-center ">
      <div className="flex justify-center font-semibold text-lg">
        <h1>
          Helped 600+ MBA applicants getting accepted into their dream schools
        </h1>
      </div>
      <div className="flex justify-between w-10/12">
        <div className="w-40">
          <img src="https://logos-world.net/wp-content/uploads/2021/01/Harvard-Logo.png" />
        </div>
        <div className="w-40">
          <img src="https://logos-world.net/wp-content/uploads/2021/01/Harvard-Logo.png" />
        </div>
        <div className="w-40">
          <img src="https://logos-world.net/wp-content/uploads/2021/01/Harvard-Logo.png" />
        </div>
        <div className="w-40">
          <img src="https://logos-world.net/wp-content/uploads/2021/01/Harvard-Logo.png" />
        </div>
        <div className="w-40">
          <img src="https://logos-world.net/wp-content/uploads/2021/01/Harvard-Logo.png" />
        </div>
        <div className="w-40">
          <img src="https://logos-world.net/wp-content/uploads/2021/01/Harvard-Logo.png" />
        </div>
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
                    src="/placeholder.svg"
                  />
                  <span className="font-semibold text-white text-lg">
                    Starter Story
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
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col items-right">
            <div className="flex flex-col">
              <div className="hidden md:flex justify-end ">
                <div className="flex flex-col mr-5">
                  <a
                    className="py-4 px-2   text-white font-semibold "
                    href="#about"
                  >
                    About Us
                  </a>
                  <a
                    className="py-4 px-2  text-white font-semibold hover:text-green-500 onClick:border-b-4 border-green-500 transition duration-300"
                    href="#services"
                  >
                    Services
                  </a>
                  <a
                    className="py-4 px-2  text-white font-semibold hover:text-green-500 transition duration-300"
                    href="#faqs"
                  >
                    FAQs
                  </a>
                </div>
                <div className="flex flex-col justify-start">
                  <a
                    className="py-4 px-2  text-white font-semibold hover:text-green-500 transition duration-300"
                    href="#faqs"
                  >
                    Essay Bank
                  </a>
                  <a
                    className="py-4 px-2  text-white font-semibold hover:text-green-500 transition duration-300"
                    href="#faqs"
                  >
                    MBA Graduates
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
}

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
      name: "GSB Class of 2024",
      rating: "★★★★★",
      review:
        "I was totally lost when I started drafting my essay. After reading five essays from successful applicants with a similar background, I got many ideas on how to best share my personal story. 100% recommend MBA Essay Genius!",
    },
    {
      name: "NaHBS Class of 2025",
      rating: "★★★★★",
      review:
        "Having a PE background, I know that companies offering services on a 'success fee' basis truly believe in their value. I did the mock interviews for free and was super happy to pay MBA Essay Genius after getting the 'YES!' from Harvard.",
    },
    {
      name: "HBS Class of 2024",
      rating: "★★★★★",
      review:
        "The essay bank is such a great idea. I know MBB consultants share resources, but as someone from a non-traditional background, it was super helpful to see how spectacular essays from successful MBA applicants are.",
    },
    {
      name: "Wharton Class of 2025",
      rating: "★★★★★",
      review:
        "This was a game-changer for me! I purchased a few essay samples and then the essay revision service. I 100% recommend it. Their comprehensive review and suggestions helped me articulate my story clearly, making my application much stronger.",
    },
    {
      name: "HBS Class of 2025",
      rating: "★★★★★",
      review:
        "I was impressed by the breadth of approaches to Harvard’s essay (it was kind of addictive, tbh!). It was great to read different personal stories from previous MBA graduates and understand which style suited me best.",
    },
    {
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
                Join Our Community
              </button>
            </div>
            <div className="mt-4">
              <span>Join thousands of founders</span>
              <div className="flex mt-4">
                <Avatar>
                  <Avatar src="//s3.amazonaws.com/www.starterstory.com/users/avatars/000/014/296/thumbnail/nadeef-ahmad.jpg?1688788968" />{" "}
                  /{" "}
                </Avatar>
                <Avatar>
                  <Avatar
                    alt="Founder 3"
                    src="//s3.amazonaws.com/www.starterstory.com/users/avatars/000/014/296/thumbnail/nadeef-ahmad.jpg?1688788968"
                  />{" "}
                  /{" "}
                </Avatar>
                <Avatar>
                  <Avatar
                    alt="Founder 4"
                    src="//s3.amazonaws.com/www.starterstory.com/users/avatars/000/014/296/thumbnail/nadeef-ahmad.jpg?1688788968"
                  />{" "}
                  /{" "}
                </Avatar>
                <Avatar>
                  <Avatar
                    alt="Founder 5"
                    src="//s3.amazonaws.com/www.starterstory.com/users/avatars/000/014/296/thumbnail/nadeef-ahmad.jpg?1688788968"
                  />{" "}
                  /{" "}
                </Avatar>
                <Avatar>
                  <Avatar
                    alt="Founder 5"
                    src="//s3.amazonaws.com/www.starterstory.com/users/avatars/000/014/296/thumbnail/nadeef-ahmad.jpg?1688788968"
                  />{" "}
                  /{" "}
                </Avatar>
              </div>
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
        <AboutUsSection />
        <ServicesSection />
        <HelpedSection />
        <TestimonialsSection testimonials={testimonials} />
        <FaqsSection faqs={faqs} />
      </main>
      <Footer />
    </div>
  );
}
export default HomePage;

