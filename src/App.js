import Avatar from '@mui/material/Avatar';
import './tailwind.css';



const ReviewItem = ({ text }) => {
    return <li>{text}</li>;
};

const FaqItem = ({ question, answer }) => {
    return (
        <details>
            <summary className="cursor-pointer text-lg font-semibold">{question}</summary>
            <p className="mt-2 text-gray-600">{answer}</p>
        </details>
    );
};

const TestimonialItem = ({ image, name, rating, review }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
        <div className='flex items-center'>
            <Avatar>
                <Avatar src="//s3.amazonaws.com/www.starterstory.com/users/avatars/000/014/296/thumbnail/nadeef-ahmad.jpg?1688788968" />        /                </Avatar>

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
    );
};

const ServicesSection = () => {
    return (
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
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <FaqItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </section>
    );
};

const TopHeader = () =>
{
    return (
        <div class="hidden flex items-center justify-center bg-indigo-900 h-10 w-full space-x-10 lg:flex">
            <div class="flex text-sm text-white">
                <svg class="w-5 h-5 w-3 h-3 text-green-500 mr-1.5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" fill-rule="evenodd"></path>
                </svg>
                4,418+ online business case studies
            </div>
            <div class="flex text-sm text-white space-x-2">
                <div class="flex items-center space-x-px">
                    <svg class="w-3 h-3 text-green-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg class="w-3 h-3 text-green-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg class="w-auto text-green-500" fill="currentColor" viewbox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <svg class="w-3 h-3 text-green-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg class="w-3 h-3 text-green-500" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                </div>
                
                 <div className='flex justify-center font-semibold text-green-500 w-5 h-5'>
                    *
                 </div>
                <div class="flex">Used by 12,568 happy customers</div>
            </div>
            <div class="flex text-sm text-white">
                <svg class="w-5 h-5 w-3 h-3 text-green-500 mr-1.5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" fill-rule="evenodd"></path>
                </svg>
                $10,842,423,564+ total revenue of all case studies
            </div>
        </div>
    )
}


const HelpedSection = () =>
{
    return (
        <div className='flex flex-col w-full items-center '>
            <div className='flex justify-center font-semibold text-lg'>
                <h1>Helped 600+ MBA applicants getting accepted into their dream schools</h1>
            </div>
            <div className='flex justify-between w-10/12'>
                <div className='w-40'>
                    <img src="https://logos-world.net/wp-content/uploads/2021/01/Harvard-Logo.png" />
                </div>
                <div className='w-40'>
                    <img src="https://logos-world.net/wp-content/uploads/2021/01/Harvard-Logo.png" />
                </div>
                <div className='w-40'>
                    <img src="https://logos-world.net/wp-content/uploads/2021/01/Harvard-Logo.png" />
                </div>
                <div className='w-40'>
                    <img src="https://logos-world.net/wp-content/uploads/2021/01/Harvard-Logo.png" />
                </div>
                <div className='w-40'>
                    <img src="https://logos-world.net/wp-content/uploads/2021/01/Harvard-Logo.png" />
                </div>
                <div className='w-40'>
                    <img src="https://logos-world.net/wp-content/uploads/2021/01/Harvard-Logo.png" />
                </div>

            </div>

            
        </div>
    )
}
function App() {
    const reviews = [
        'Great product!',
        'Excellent service!',
        'Love it!'
    ];

    const faqs = [
        { question: 'Question 1', answer: 'Answer 1' },
        { question: 'Question 2', answer: 'Answer 2' },
        { question: 'Question 3', answer: 'Answer 3' },
        { question: 'Question 4', answer: 'Answer 4' },
        { question: 'Question 5', answer: 'Answer 5' },
        { question: 'Question 6', answer: 'Answer 6' },
        { question: 'Question 7', answer: 'Answer 7' },
        { question: 'Question 8', answer: 'Answer 8' },
        { question: 'Question 9', answer: 'Answer 9' },
        { question: 'Question 10', answer: 'Answer 10' },
    ];

    const testimonials = [
        {
            name: 'GSB Class of 2024', rating: '★★★★★', review: 'I was totally lost when I started drafting my essay. After reading five essays from successful applicants with a similar background, I got many ideas on how to best share my personal story. 100% recommend MBA Essay Genius!' },
        {
            name: 'NaHBS Class of 2025', rating: '★★★★★', review: 'Having a PE background, I know that companies offering services on a \'success fee\' basis truly believe in their value. I did the mock interviews for free and was super happy to pay MBA Essay Genius after getting the \'YES!\' from Harvard.' },
        {
            name: 'HBS Class of 2024', rating: '★★★★★', review: 'The essay bank is such a great idea. I know MBB consultants share resources, but as someone from a non-traditional background, it was super helpful to see how spectacular essays from successful MBA applicants are.' },
        { name: 'Wharton Class of 2025', rating: '★★★★★', review: 'This was a game-changer for me! I purchased a few essay samples and then the essay revision service. I 100% recommend it. Their comprehensive review and suggestions helped me articulate my story clearly, making my application much stronger.' },
        {
            name: 'HBS Class of 2025', rating: '★★★★★', review: 'I was impressed by the breadth of approaches to Harvard’s essay (it was kind of addictive, tbh!). It was great to read different personal stories from previous MBA graduates and understand which style suited me best.' },
        { name: 'GSB Class of 2025', rating: '★★★★★', review: 'A no-brainer purchase. It\'s super cheap and highly valuable! I honestly think everyone considering applying should read a few essays before starting their application.' },
    ];

    return (
        <div className="flex flex-col min-h-screen">

            <TopHeader />
            
            <nav className="bg-[#665eff] sticky top-0 z-50">
                <div className="w-11/12 mx-auto px-4">
                  <div className="flex justify-between">
                    <div className="flex space-x-7">
                      <div>
                        <a className="flex items-center py-4 px-2" href="#">
                          <img alt="Logo" className="h-8 w-8 mr-2" src="/placeholder.svg" />
                          <span className="font-semibold text-white text-lg">Starter Story</span>
                        </a>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                            <a className="py-4 px-2  text-white hover:text-green-500 font-semibold " href="#about">
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
                      <a
                        className="py-4 px-2  text-white font-semibold hover:text-green-500 transition duration-300"
                        href="#"
                      >
                        Essay Bank
                      </a>
                      <a
                        className="py-4 px-2  text-white font-semibold hover:text-green-500 transition duration-300"
                        href="#"
                      >
                        MBA Graduates
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
              <header className="bg-[#665eff] section-1 text-white text-center lg:text-left">
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
                                    <Avatar  src="//s3.amazonaws.com/www.starterstory.com/users/avatars/000/014/296/thumbnail/nadeef-ahmad.jpg?1688788968" />        /                </Avatar>
                        <Avatar>
                                    <Avatar alt="Founder 3" src="//s3.amazonaws.com/www.starterstory.com/users/avatars/000/014/296/thumbnail/nadeef-ahmad.jpg?1688788968" />         /                </Avatar>
                        <Avatar>
                                    <Avatar alt="Founder 4" src="//s3.amazonaws.com/www.starterstory.com/users/avatars/000/014/296/thumbnail/nadeef-ahmad.jpg?1688788968" />        /                </Avatar>
                        <Avatar>
                                    <Avatar alt="Founder 5" src="//s3.amazonaws.com/www.starterstory.com/users/avatars/000/014/296/thumbnail/nadeef-ahmad.jpg?1688788968" />        /                </Avatar>
                                <Avatar>
                                    <Avatar alt="Founder 5" src="//s3.amazonaws.com/www.starterstory.com/users/avatars/000/014/296/thumbnail/nadeef-ahmad.jpg?1688788968" />        /                </Avatar>
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
            <footer className="bg-black">
                     <div className="container mx-auto px-6 py-4">
                       <div className="flex flex-col items-right">
                         <div className='flex flex-col'>
                            <div className="hidden md:flex justify-end ">
                                <div className='flex flex-col mr-5'>
                                    <a className="py-4 px-2   text-white font-semibold " href="#about">
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
                                <div className='flex flex-col justify-start'>
                                <a className="py-4 px-2  text-white font-semibold hover:text-green-500 transition duration-300"
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
                 </div>

    
    )
                    }
export default App;

// import Avatar from '@mui/material/Avatar';
// import './tailwind.css';
// function App() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <nav className="bg-white sticky top-0 z-50 shadow-lg">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="flex justify-between">
//             <div className="flex space-x-7">
//               <div>
//                 <a className="flex items-center py-4 px-2" href="#">
//                   <img alt="Logo" className="h-8 w-8 mr-2" src="/placeholder.svg" />
//                   <span className="font-semibold  text-white text-lg">Starter Story</span>
//                 </a>
//               </div>
//             </div>
//             <div className="hidden md:flex items-center space-x-1">
//               <a className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold " href="#about">
//                 About Us
//               </a>
//               <a
//                 className="py-4 px-2  text-white font-semibold hover:text-green-500 transition duration-300"
//                 href="#services"
//               >
//                 Services
//               </a>
//               <a
//                 className="py-4 px-2  text-white font-semibold hover:text-green-500 transition duration-300"
//                 href="#faqs"
//               >
//                 FAQs
//               </a>
//               <a
//                 className="py-4 px-2  text-white font-semibold hover:text-green-500 transition duration-300"
//                 href="#"
//               >
//                 Essay Bank
//               </a>
//               <a
//                 className="py-4 px-2  text-white font-semibold hover:text-green-500 transition duration-300"
//                 href="#"
//               >
//                 MBA Graduates
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>
//       <header className="bg-[#635BFF] text-white text-center lg:text-left">
//         <div className="container mx-auto flex flex-col lg:flex-row items-center .justify-items-end">
//           <div className="lg:w-3/4">
//             <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-none">
//             Unlock the secrets to a successful MBA application
//             </h1>
//             <p className="text-xl lg:text-2xl mt-6 font-light">
//             Dive into our database of 500+ essays from rockstar MBA applicants & join our community of top business school MBAs
//             </p>
//             <div className="mt-8 md:mt-12">
//               <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg">
//                 Join Our Community
//               </button>
//             </div>
//             <div className="mt-4">
//               <span>Join thousands of founders</span>
//               <div className="flex mt-4">
//                 <Avatar>
//                   <Avatar  alt="Founder 1" src="/founder1.jpg" />
                  
//                 </Avatar>
//                 <Avatar>
//                   <Avatar alt="Founder 2" src="/founder2.jpg" />
                  
//                 </Avatar>
//                 <Avatar>
//                   <Avatar alt="Founder 3" src="/founder3.jpg" />
                  
//                 </Avatar>
//                 <Avatar>
//                   <Avatar alt="Founder 4" src="/founder4.jpg" />
                  
//                 </Avatar>
//                 <Avatar>
//                   <Avatar alt="Founder 5" src="/founder5.jpg" />
                  
//                 </Avatar>
//               </div>
//             </div>
//           </div>
//           {/* move this to the right */}
//           <div className="mt-12 lg:mt-0 lg:w-1/4 justify-items-end">
//             <img
//               alt="Mobile App"
//               className="rounded-3xl"
//               height="100"
//               src="https://s3.amazonaws.com/www.starterstory.com/production/images/0ca21f78bae69f9b"
//               style={{
//                 aspectRatio: "262/500",
//                 objectFit: "fit",
//               }}
//               width="262"
//             />
//           </div>
//         </div>
//       </header>
//       <main className="mb-auto">
//         <section className="container mx-auto px-6 py-12" id="about">
//           <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
//           <p className="text-lg text-gray-700 mb-6">
//             Unlock the mysterious world of MBA applications without breaking the bank! Forget shelling out thousands on
//             an MBA coach – we've got your back with a budget-friendly alternative (or complement) to those sky-high
//             consulting fees.
//           </p>
//           <p className="text-lg text-gray-700 mb-6">
//             Dive into successful applicants’ essays to see the real storytelling skills you need! Embark on a journey
//             behind the scenes, where real applicants reveal the ins and outs of their triumphant MBA narratives, how
//             they wowed the admissions gods and secured a spot in their dream MBA program. No biased consultants here –
//             just authentic, unfiltered tales from the MBA battlefield.
//           </p>
//           <p className="text-lg text-gray-700">
//             Discover the secrets of triumph from individuals who walked a similar path pre-MBA. Whether you're a
//             number-crunching finance guru or a consultant mastermind, we've got essays from people with a similar
//             background [yes, seeing how a veteran sold her deployment experience to get into Harvard is not helpful if
//             you don’t have experience].
//           </p>
//         </section>
//         <section className="container mx-auto px-6 py-12" id="services">
//           <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
//           <div className="grid grid-cols-2 gap-6">
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-2xl font-bold mb-2">Essay Revision</h3>
//               <p className="text-lg text-gray-700 mb-6">$49 per revision</p>
//               <p className="text-gray-600">
//                 Struggling to turn your MBA essay from 'meh' to 'marvelous'? For just $49, our essay revision service is
//                 your secret weapon! Imagine a dream team of former MBA whizzes, armed with red pens and killer
//                 instincts, ready to transform your essay from drab to fab. We don't just pinpoint typos; we tell you how
//                 to add the zing, zap, and zoom your essay needs to stand out. Think of us as your personal trainers for
//                 your words – except we promise no heavy lifting. Say goodbye to sleepless nights and hello to a
//                 masterpiece. Let's give the admissions committee something to talk about!
//               </p>
//             </div>
//             <div className="grid grid-rows-3 gap-6">
//               <div className="bg-white shadow-lg rounded-lg p-6" />
//               <div className="bg-white shadow-lg rounded-lg p-6" />
//               <div className="bg-white shadow-lg rounded-lg p-6" />
//             </div>
//           </div>
//         </section>
//         <section className="container mx-auto px-6 py-12" id="testimonials">
//           <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-xl font-bold mb-2">Name</h3>
//               <p className="text-yellow-500 mb-4">★★★★★</p>
//               <p className="text-gray-600">
//                 I was totally lost when I started drafting my essay. After reading five essays from successful
//                 applicants with a similar background, I got many ideas on how to best share my personal story. 100%
//                 recommend MBA Essay Genius!
//               </p>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-xl font-bold mb-2">Name</h3>
//               <p className="text-yellow-500 mb-4">★★★★★</p>
//               <p className="text-gray-600">
//                 I was totally lost when I started drafting my essay. After reading five essays from successful
//                 applicants with a similar background, I got many ideas on how to best share my personal story. 100%
//                 recommend MBA Essay Genius!
//               </p>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-xl font-bold mb-2">Name</h3>
//               <p className="text-yellow-500 mb-4">★★★★★</p>
//               <p className="text-gray-600">
//                 I was totally lost when I started drafting my essay. After reading five essays from successful
//                 applicants with a similar background, I got many ideas on how to best share my personal story. 100%
//                 recommend MBA Essay Genius!
//               </p>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-xl font-bold mb-2">Name</h3>
//               <p className="text-yellow-500 mb-4">★★★★★</p>
//               <p className="text-gray-600">
//                 I was totally lost when I started drafting my essay. After reading five essays from successful
//                 applicants with a similar background, I got many ideas on how to best share my personal story. 100%
//                 recommend MBA Essay Genius!
//               </p>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-xl font-bold mb-2">Name</h3>
//               <p className="text-yellow-500 mb-4">★★★★★</p>
//               <p className="text-gray-600">
//                 I was totally lost when I started drafting my essay. After reading five essays from successful
//                 applicants with a similar background, I got many ideas on how to best share my personal story. 100%
//                 recommend MBA Essay Genius!
//               </p>
//             </div>
//             <div className="bg-white shadow-lg rounded-lg p-6">
//               <h3 className="text-xl font-bold mb-2">Name</h3>
//               <p className="text-yellow-500 mb-4">★★★★★</p>
//               <p className="text-gray-600">
//                 I was totally lost when I started drafting my essay. After reading five essays from successful
//                 applicants with a similar background, I got many ideas on how to best share my personal story. 100%
//                 recommend MBA Essay Genius!
//               </p>
//             </div>
//           </div>
//         </section>
//         <section className="container mx-auto px-6 py-12" id="faqs">
//           <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
//           <div className="space-y-6">
//             <details>
//               <summary className="cursor-pointer text-lg font-semibold">Question 1</summary>
//               <p className="mt-2 text-gray-600">Answer 1</p>
//             </details>
//             <details>
//               <summary className="cursor-pointer text-lg font-semibold">Question 2</summary>
//               <p className="mt-2 text-gray-600">Answer 2</p>
//             </details>
//             <details>
//               <summary className="cursor-pointer text-lg font-semibold">Question 3</summary>
//               <p className="mt-2 text-gray-600">Answer 3</p>
//             </details>
//             <details>
//               <summary className="cursor-pointer text-lg font-semibold">Question 4</summary>
//               <p className="mt-2 text-gray-600">Answer 4</p>
//             </details>
//             <details>
//               <summary className="cursor-pointer text-lg font-semibold">Question 5</summary>
//               <p className="mt-2 text-gray-600">Answer 5</p>
//             </details>
//             <details>
//               <summary className="cursor-pointer text-lg font-semibold">Question 6</summary>
//               <p className="mt-2 text-gray-600">Answer 6</p>
//             </details>
//             <details>
//               <summary className="cursor-pointer text-lg font-semibold">Question 7</summary>
//               <p className="mt-2 text-gray-600">Answer 7</p>
//             </details>
//             <details>
//               <summary className="cursor-pointer text-lg font-semibold">Question 8</summary>
//               <p className="mt-2 text-gray-600">Answer 8</p>
//             </details>
//             <details>
//               <summary className="cursor-pointer text-lg font-semibold">Question 9</summary>
//               <p className="mt-2 text-gray-600">Answer 9</p>
//             </details>
//             <details>
//               <summary className="cursor-pointer text-lg font-semibold">Question 10</summary>
//               <p className="mt-2 text-gray-600">Answer 10</p>
//             </details>
//           </div>
//         </section>
//       </main>
//       <footer className="bg-white">
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex flex-col items-center">
//             <div className="py-6">
//               <p className=" text-white text-sm text-center font-bold">© 2023 Starter Story. All rights reserved.</p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default App;
