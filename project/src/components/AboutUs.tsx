import React from 'react';
import { useInView } from '../hooks/useInView';

const AboutUs: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div 
        ref={ref}
        className={`container mx-auto px-4 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } transition-all duration-1000 ease-out`}
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 dark:bg-blue-900 rounded-full opacity-50"></div>
              <img 
                src="https://ik.imagekit.io/awyppiw5i/CEO-FOUNDER1.jpg?updatedAt=1747770187742" 
                alt="Wallace Brown, CEO of LeadDevCorps" 
                className="relative z-10 rounded-2xl shadow-2xl w-full max-w-md object-cover h-[500px]"
              />
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-indigo-100 dark:bg-indigo-900 rounded-full opacity-30"></div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium text-sm mb-6">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Leading Africa's AI <span className="text-blue-700 dark:text-blue-400">Revolution</span>
            </h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                Wallace Brown, CEO & Founder
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                With a passion for innovation and a commitment to Africa's technological future, Wallace Brown founded LeadDevCorps to bridge the gap between cutting-edge AI and practical business solutions for the African market.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 dark:border-blue-500 pl-4">
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Our Mission</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  To democratize access to AI technology across Africa, enabling businesses of all sizes to harness the power of intelligent systems for growth and innovation.
                </p>
              </div>
              
              <div className="border-l-4 border-indigo-600 dark:border-indigo-500 pl-4">
                <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Our Vision</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  A future where African businesses lead global innovation through accessible, powerful AI tools and a thriving community of tech enthusiasts and developers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;