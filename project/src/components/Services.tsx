import React from 'react';
import { Bot, ShoppingBag, Cog, Lightbulb } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const services = [
  {
    id: 1,
    title: 'AI Agent Development',
    description: 'Custom AI solutions tailored to your business needs. We build intelligent agents that can automate tasks, analyze data, and provide valuable insights.',
    icon: Bot,
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
    delay: 0,
  },
  {
    id: 2,
    title: 'POS & Inventory Systems',
    description: 'Streamlined point-of-sale and inventory management solutions to help businesses track sales, manage stock, and optimize operations.',
    icon: ShoppingBag,
    color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
    delay: 150,
  },
  {
    id: 3,
    title: 'Business Automation Tools',
    description: 'Automate repetitive tasks and workflows to increase efficiency, reduce errors, and free up your team to focus on high-value activities.',
    icon: Cog,
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
    delay: 300,
  },
  {
    id: 4,
    title: 'Software & Technical Consulting',
    description: 'Expert guidance on technology strategy, software architecture, and implementation to ensure your business leverages the right technologies.',
    icon: Lightbulb,
    color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400',
    delay: 450,
  },
];

const Services: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium text-sm mb-6">
            What We Offer
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Comprehensive <span className="text-blue-700 dark:text-blue-400">Solutions</span> for Modern Businesses
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            We provide a range of services designed to help African businesses innovate, automate, and thrive in the digital age.
          </p>
        </div>
        
        <div 
          ref={ref} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <div 
              key={service.id}
              className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 transition-all duration-500 ease-out transform hover:shadow-xl hover:-translate-y-1 ${
                inView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${service.delay}ms` }}
            >
              <div className={`w-14 h-14 rounded-lg ${service.color} flex items-center justify-center mb-5`}>
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;