import React from 'react';
import { Header, Footer } from './Homepage';
import { motion } from 'framer-motion'; // Import motion from framer-motion for animations

const MbaGraduates = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col italic mx-auto px-4 mt-10 mb-10 w-11/12 max-w-screen-lg">
        {/* Quote Section */}
        <div className="flex  mb-8">
          <div className="mr-4">
            <img
              src="founder.jpeg" // Replace with the actual path to your avatar image
              alt="Old Man Avatar"
              className="w-100 h-100 rounded-full"
            />
          </div>
          <p className="text-lg italic text-black-600">
            "If you don't find a way to make money while you sleep, you<br></br> will work until you die." – Warren Buffett
          </p>
        </div>
        <div>
          <p className="text-black-500 font-italic mb-10">
            <strong>Are you interested in turning a (sunk) cost into an asset</strong>? (Yeah, they don’t teach you this in business school)?
          </p>
          <p className="text-black-500 mb-10 font-italic">
            That’s right - <strong>We offer you an easy way to monetize your application Essay</strong> (and yes, you don’t need to worry<br></br> about Marketing)!!
          </p>
          <div className="mx-auto"> {/* Apply mx-auto to center the div */}
            <p className="text-black-500 font-italic">
              <strong>How does it work?</strong> Three simple steps (just like your consulting interviews):
            </p>
            <ol className="list-decimal">
              <li>
                Upload the essays that got you business school interviews <strong>here.</strong>
              </li>
              <li>
                Our AI model (if it sounds fancy, trust your instincts) <strong>sanitizes all sensitive information</strong> (yeah, no stalkers on <br></br>LinkedIn).
              </li>
              <li>
                We pay you <strong>20% of revenue</strong> every time a customer buys your essay (royalties, babe!).
              </li>
              <li>
                [Optional] We give you another opportunity to make money on the side with <strong>leads for paid mock interviews</strong> with <br></br>our clients (we know you still have some ski trips to pay).
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MbaGraduates;
