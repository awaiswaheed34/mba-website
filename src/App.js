import Avatar from '@mui/material/Avatar';
import './tailwind.css';
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <a className="flex items-center py-4 px-2" href="#">
                  <img alt="Logo" className="h-8 w-8 mr-2" src="/placeholder.svg" />
                  <span className="font-semibold text-gray-500 text-lg">Starter Story</span>
                </a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold " href="#about">
                About Us
              </a>
              <a
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                href="#services"
              >
                Services
              </a>
              <a
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                href="#faqs"
              >
                FAQs
              </a>
              <a
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                href="#"
              >
                Essay Bank
              </a>
              <a
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                href="#"
              >
                MBA Graduates
              </a>
            </div>
          </div>
        </div>
      </nav>
      <header className="bg-[#635BFF] text-white text-center lg:text-left">
        <div className="container mx-auto flex flex-col lg:flex-row items-center .justify-items-end">
          <div className="lg:w-3/4">
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Unlock the secrets to a successful MBA application
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
            Dive into our database of 500+ essays from rockstar MBA applicants & join our community of top business school MBAs
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
                  <Avatar  alt="Founder 1" src="/founder1.jpg" />
                  
                </Avatar>
                <Avatar>
                  <Avatar alt="Founder 2" src="/founder2.jpg" />
                  
                </Avatar>
                <Avatar>
                  <Avatar alt="Founder 3" src="/founder3.jpg" />
                  
                </Avatar>
                <Avatar>
                  <Avatar alt="Founder 4" src="/founder4.jpg" />
                  
                </Avatar>
                <Avatar>
                  <Avatar alt="Founder 5" src="/founder5.jpg" />
                  
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
        <section className="container mx-auto px-6 py-12" id="about">
          <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            Unlock the mysterious world of MBA applications without breaking the bank! Forget shelling out thousands on
            an MBA coach – we've got your back with a budget-friendly alternative (or complement) to those sky-high
            consulting fees.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Dive into successful applicants’ essays to see the real storytelling skills you need! Embark on a journey
            behind the scenes, where real applicants reveal the ins and outs of their triumphant MBA narratives, how
            they wowed the admissions gods and secured a spot in their dream MBA program. No biased consultants here –
            just authentic, unfiltered tales from the MBA battlefield.
          </p>
          <p className="text-lg text-gray-700">
            Discover the secrets of triumph from individuals who walked a similar path pre-MBA. Whether you're a
            number-crunching finance guru or a consultant mastermind, we've got essays from people with a similar
            background [yes, seeing how a veteran sold her deployment experience to get into Harvard is not helpful if
            you don’t have experience].
          </p>
        </section>
        <section className="container mx-auto px-6 py-12" id="services">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-2">Essay Revision</h3>
              <p className="text-lg text-gray-700 mb-6">$49 per revision</p>
              <p className="text-gray-600">
                Struggling to turn your MBA essay from 'meh' to 'marvelous'? For just $49, our essay revision service is
                your secret weapon! Imagine a dream team of former MBA whizzes, armed with red pens and killer
                instincts, ready to transform your essay from drab to fab. We don't just pinpoint typos; we tell you how
                to add the zing, zap, and zoom your essay needs to stand out. Think of us as your personal trainers for
                your words – except we promise no heavy lifting. Say goodbye to sleepless nights and hello to a
                masterpiece. Let's give the admissions committee something to talk about!
              </p>
            </div>
            <div className="grid grid-rows-3 gap-6">
              <div className="bg-white shadow-lg rounded-lg p-6" />
              <div className="bg-white shadow-lg rounded-lg p-6" />
              <div className="bg-white shadow-lg rounded-lg p-6" />
            </div>
          </div>
        </section>
        <section className="container mx-auto px-6 py-12" id="testimonials">
          <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Name</h3>
              <p className="text-yellow-500 mb-4">★★★★★</p>
              <p className="text-gray-600">
                I was totally lost when I started drafting my essay. After reading five essays from successful
                applicants with a similar background, I got many ideas on how to best share my personal story. 100%
                recommend MBA Essay Genius!
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Name</h3>
              <p className="text-yellow-500 mb-4">★★★★★</p>
              <p className="text-gray-600">
                I was totally lost when I started drafting my essay. After reading five essays from successful
                applicants with a similar background, I got many ideas on how to best share my personal story. 100%
                recommend MBA Essay Genius!
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Name</h3>
              <p className="text-yellow-500 mb-4">★★★★★</p>
              <p className="text-gray-600">
                I was totally lost when I started drafting my essay. After reading five essays from successful
                applicants with a similar background, I got many ideas on how to best share my personal story. 100%
                recommend MBA Essay Genius!
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Name</h3>
              <p className="text-yellow-500 mb-4">★★★★★</p>
              <p className="text-gray-600">
                I was totally lost when I started drafting my essay. After reading five essays from successful
                applicants with a similar background, I got many ideas on how to best share my personal story. 100%
                recommend MBA Essay Genius!
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Name</h3>
              <p className="text-yellow-500 mb-4">★★★★★</p>
              <p className="text-gray-600">
                I was totally lost when I started drafting my essay. After reading five essays from successful
                applicants with a similar background, I got many ideas on how to best share my personal story. 100%
                recommend MBA Essay Genius!
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Name</h3>
              <p className="text-yellow-500 mb-4">★★★★★</p>
              <p className="text-gray-600">
                I was totally lost when I started drafting my essay. After reading five essays from successful
                applicants with a similar background, I got many ideas on how to best share my personal story. 100%
                recommend MBA Essay Genius!
              </p>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-6 py-12" id="faqs">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <details>
              <summary className="cursor-pointer text-lg font-semibold">Question 1</summary>
              <p className="mt-2 text-gray-600">Answer 1</p>
            </details>
            <details>
              <summary className="cursor-pointer text-lg font-semibold">Question 2</summary>
              <p className="mt-2 text-gray-600">Answer 2</p>
            </details>
            <details>
              <summary className="cursor-pointer text-lg font-semibold">Question 3</summary>
              <p className="mt-2 text-gray-600">Answer 3</p>
            </details>
            <details>
              <summary className="cursor-pointer text-lg font-semibold">Question 4</summary>
              <p className="mt-2 text-gray-600">Answer 4</p>
            </details>
            <details>
              <summary className="cursor-pointer text-lg font-semibold">Question 5</summary>
              <p className="mt-2 text-gray-600">Answer 5</p>
            </details>
            <details>
              <summary className="cursor-pointer text-lg font-semibold">Question 6</summary>
              <p className="mt-2 text-gray-600">Answer 6</p>
            </details>
            <details>
              <summary className="cursor-pointer text-lg font-semibold">Question 7</summary>
              <p className="mt-2 text-gray-600">Answer 7</p>
            </details>
            <details>
              <summary className="cursor-pointer text-lg font-semibold">Question 8</summary>
              <p className="mt-2 text-gray-600">Answer 8</p>
            </details>
            <details>
              <summary className="cursor-pointer text-lg font-semibold">Question 9</summary>
              <p className="mt-2 text-gray-600">Answer 9</p>
            </details>
            <details>
              <summary className="cursor-pointer text-lg font-semibold">Question 10</summary>
              <p className="mt-2 text-gray-600">Answer 10</p>
            </details>
          </div>
        </section>
      </main>
      <footer className="bg-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col items-center">
            <div className="py-6">
              <p className="text-gray-500 text-sm text-center font-bold">© 2023 Starter Story. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App;
