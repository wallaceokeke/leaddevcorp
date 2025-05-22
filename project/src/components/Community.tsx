import React from 'react';
import { Users, MessagesSquare, Code } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Community: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="community" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={ref}
          className={`bg-gradient-to-br from-blue-700 to-indigo-800 dark:from-blue-800 dark:to-indigo-900 rounded-3xl p-8 md:p-12 shadow-xl ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          } transition-all duration-1000 ease-out text-white`}
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-3/5">
              <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white font-medium text-sm mb-6">
                Join Our Community
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We are more than a company — we are a growing community
              </h2>
              <p className="text-white/80 mb-8 text-lg">
                Connect with like-minded developers, innovators, and businesses passionate about AI and technology in Africa. Share ideas, collaborate on projects, and be part of shaping Africa's tech future.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Network with Tech Enthusiasts</h4>
                    <p className="text-white/80">Connect with developers, entrepreneurs, and AI enthusiasts.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <MessagesSquare size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Join Our WhatsApp Group</h4>
                    <p className="text-white/80">Instant access to discussions, resources, and community support.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Code size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Collaborative Learning</h4>
                    <p className="text-white/80">Share knowledge, code, and best practices with peers.</p>
                  </div>
                </div>
              </div>
              
              <a
                href="https://chat.whatsapp.com/K6a915kz7CmEsdWw6mFgMq"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white hover:bg-blue-50 text-blue-700 font-medium transition-all transform hover:scale-105 shadow-lg"
                target="_blank"
                rel="noreferrer"
              >
                Join WhatsApp Group →
              </a>
            </div>
            
            <div className="md:w-2/5 hidden md:block">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500 opacity-30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-500 opacity-30 rounded-full blur-3xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex flex-col gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-white/90">
                        "Joining the LeadDevCorps community has been invaluable for my startup. The connections and insights I've gained have accelerated our growth."
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                          <span className="font-semibold">EO</span>
                        </div>
                        <div>
                          <p className="font-medium">Elizabeth Omondi</p>
                          <p className="text-sm text-white/70">FinTech Startup Founder</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-white/90">
                        "The technical discussions in the WhatsApp group have helped me solve problems I'd been stuck on for weeks. Great community!"
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                          <span className="font-semibold">DK</span>
                        </div>
                        <div>
                          <p className="font-medium">David Kamau</p>
                          <p className="text-sm text-white/70">Software Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;