
import "./tailwind.css";
import FaqsSection from './components/Molecule/FAQSection/FAQSection';
import AboutUsSection from './components/Molecule/AboutSection/AboutSection';
import ServicesSection from './components/Molecule/ServicesSection/ServicesSection';
import TestimonialsSection from './components/Molecule/TestimonialSection/TestimonialSection';
import HelpedSection from './components/Molecule/HelpSecton/HelpSection';
import ImageGallery from './components/Compound/ImageGallery/ImageGallery';
import TopHeader from './components/Compound/TopHeader/TopHeader';
import HeroSection from './components/Molecule/HeroSection/HeroSection';
import Matrix from './components/Compound/Matrix/Matrix';
import Footer from './components/Compound/Footer/Footer';
import Header from './components/Compound/Header/Header';

import MyForm from "./Form";

const ReviewItem = ({ text }) => {
  return <li>{text}</li>;
};






const HomePage = () => {
  const reviews = ["Great product!", "Excellent service!", "Love it!"];

  const faqs = [
    { question: "Why should I consider buying essay samples?", answer: "Well, why not? Instead of banking on secondhand advice from folks who didn’t make it into your dream MBA program, why not dive into essays from successful applicants who share your background (think country, industry, post-MBA goals, etc.)? It’s like getting insider tips without the hefty price tag of an MBA consultant." },
    { question: "How many essay samples should I buy?", answer: "Totally your call! Some of our clients are happy with just one sample, while others can't get enough and go for 10 or more. On average, our most successful clients tend to go for about 3 essays. Trust us, they’re pretty engaging." },
    { question: "Which essay samples should I buy if I’m applying to different business schools?", answer: "Since every business school has its own unique essay prompts and word limits, it's smart to pick essays tailored to each school you're applying to. Successful applicants know it's all about customizing your essays to fit what each school is really looking for." },
    { question: "How did you create your Essay bank?", answer: "With a lot of care and a dash of strategy! We've compensated successful MBA students and graduates for their killer essays, building an unparalleled collection that truly reflects the diversity of a business school classroom." },
    { question: "How does the money-back guarantee work?", answer: "We’re all about aligning our success with yours. If you don’t land an offer after using our Mock Interview bundle, or don’t snag an interview invite with our Holistic Application Review service, you get your money back. Simple as that" },
    { question: "How quickly will I receive my essay after purchase?", answer: "We’re speedy! After confirming your payment, you'll get your essay sample(s) emailed to you in under 2 business days." },
    { question: "What services do you offer? Can you help edit my essay? Mock interviews? Holistic application revision service?", answer: "Absolutely, we've got you covered! Whether you need a hand polishing your essay, a full-on makeover for your entire application, or some rigorous practice for your upcoming interviews, we're here to help. Dive into our 'Essay Revision' service to jazz up your writing, take advantage of our 'Holistic Application Review' to ensure your application shines from top to bottom, or gear up with our Mock Interviews to ace that thrilling interview invitation. Whatever your need, we’re here to support you in putting your best foot forward." },
    { question: "I’m an MBA student/graduate from a top business school. How can I join your team?", answer: "Got essays gathering dust? Turn them into a goldmine with us and start earning royalties. If you’re interested, shoot us an email." },
    { question: "What payment methods do you accept?", answer: "We’re flexible! PayPal, Venmo, Zelle, Revolut, or a classic bank transfer – whatever works for you." },

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
      <HeroSection />
      <main className="mb-auto">
        <HelpedSection />
        <AboutUsSection />
        <Matrix />
        <ServicesSection />
        <ImageGallery />
        <TestimonialsSection testimonials={testimonials} />
        <FaqsSection faqs={faqs} />
      </main>
      <Footer />
    </div>
  );
}
export default HomePage;
