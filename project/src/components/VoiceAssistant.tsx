import React from 'react';
import { Mic, Bot, Headphones } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const VoiceAssistant: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div 
        ref={ref}
        className={`container mx-auto px-4 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } transition-all duration-1000 ease-out`}
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium text-sm mb-6">
            Voice Assistant
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Experience Our <span className="text-blue-700 dark:text-blue-400">AI Assistant</span> in Action
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Try our intelligent voice assistant powered by ElevenLabs technology. Ask questions, get information about our services, or just have a conversation.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-7/12 p-8 md:p-10">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Talk to Our AI Agent
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our AI assistant can help you learn more about LeadDevCorps, answer questions about our services, and provide information about AI solutions.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 p-2 rounded-full">
                    <Mic size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">Natural Voice Interaction</h4>
                    <p className="text-gray-500 dark:text-gray-400">Speak naturally and get human-like responses</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 p-2 rounded-full">
                    <Bot size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">Intelligent Responses</h4>
                    <p className="text-gray-500 dark:text-gray-400">Powered by advanced AI to provide accurate information</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-400 p-2 rounded-full">
                    <Headphones size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 dark:text-gray-200">24/7 Availability</h4>
                    <p className="text-gray-500 dark:text-gray-400">Get answers whenever you need them</p>
                  </div>
                </div>
              </div>
              
              <a
                href="https://elevenlabs.io/app/talk-to?agent_id=agent_01jvprt5pwfwxsysnddrxrf6yp"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-medium transition-all transform hover:scale-105 shadow-lg"
                target="_blank"
                rel="noreferrer"
              >
                🎙️ Talk to Our AI Agent
              </a>
            </div>
            
            <div className="md:w-5/12 bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 flex items-center justify-center p-8">
              <div className="relative w-full max-w-[250px] aspect-square">
                <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-40" style={{ animationDuration: '3s' }}></div>
                <div className="absolute inset-0 rounded-full bg-white/30 animate-ping opacity-40" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
                <div className="relative h-full w-full rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="text-white">
                    <Mic size={80} className="mx-auto mb-4" />
                    <p className="text-center font-medium">Your voice assistant is ready</p>
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

export default VoiceAssistant;