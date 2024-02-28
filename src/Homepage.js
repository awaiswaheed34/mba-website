
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
