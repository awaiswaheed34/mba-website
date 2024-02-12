import React from 'react';
import { Header, Footer } from './Homepage';
import { motion } from 'framer-motion'; // Import motion from framer-motion for animations

const MbaGraduates = () => {
  return (
    <div>
    <Header />
    <div className="w-11/12 mx-auto px-4 mt-10">
      {/* Quote Section */}
      <div className="flex items-center justify-center mb-8">
        <div className="mr-4">
          <img
            src="https://example.com/path-to-your-avatar.png" // Replace with the actual path to your avatar image
            alt="Old Man Avatar"
            className="w-12 h-12 rounded-full"
          />
        </div>
        <blockquote className="text-lg font-italic text-gray-600">
          "If you don't find a way to make money while you sleep, you will work until you die." – Warren Buffett
        </blockquote>
      </div>

      {/* MBA Graduates Section */}
      <h1 className="text-4xl font-bold text-center mb-5 text-[#665eff]">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .5 }}>
          MBA Graduates
        </motion.span>
      </h1>

      {/* Content Section */}
      <p className=" text-gray-500 mb-10">
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .5, duration: .5 }}>
          Are you interested in turning a <strong>(sunk) cost into an asset</strong>? (Yeah, they don’t teach you this in business school).
        </motion.span>
        <br />
        <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: .5 }}>
          That’s right - We offer you an easy way to <strong>monetize your application Essay</strong> (and yes, you don’t need to worry about Marketing)!!
        </motion.span>
        <br />
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: .5 }}>
            How does it work? Three simple steps (just like your consulting interviews):
          </motion.span>
          <ol className="list-decimal flex flex-col  mx-auto max-w-[600px]">
            <li>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: .5 }}>
                Upload the essays that got you business school interviews here.
              </motion.span>
            </li>
            <li>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: .5 }}>
                Our AI model (if it sounds fancy, trust your instincts) sanitizes all sensitive information (yeah, no stalkers on LinkedIn).
              </motion.span>
            </li>
            <li>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: .5 }}>
                We pay you 20% of revenue every time a customer buys your essay (royalties, babe!).
              </motion.span>
            </li>
            <li>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3, duration: .5 }}>
                [Optional] We give you another opportunity to make money on the side with leads for paid mock interviews with our clients (we know you still have some ski trips to pay).
              </motion.span>
            </li>
          </ol>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default MbaGraduates;
