import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, X, Bot, User } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { RESUME_DATA } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: `You are an AI assistant representing Manish Nagpure.
          Your goal is to answer questions about Manish's background, skills, and experience based on his resume data.
          Be professional, concise, and helpful.
          
          Resume Data:
          - Education: ${JSON.stringify(RESUME_DATA.education)}
          - Experience: ${JSON.stringify(RESUME_DATA.experience)}
          - Projects: ${JSON.stringify(RESUME_DATA.projects)}
          - Skills: ${JSON.stringify(RESUME_DATA.skills)}
          - Achievements: ${JSON.stringify(RESUME_DATA.achievements)}
          
          About his role at CAMS: He is a Software Development Engineer I working on Projects Odin (Looker Mapping and API Modernization).
          Key Skills: Java, Spring Boot, React, GCP, Docker.
          Education: M.Tech from IIIT Allahabad.
          
          If asked something not in the resume, politely steer the conversation back to his professional profile.`
        }
      });

      const assistantMessage = response.text || "I'm sorry, I couldn't process that.";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Error: Could not connect to AI. Please check the API key." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.button
        id="ai-toggle"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-cv-blue text-white shadow-lg hover:shadow-xl transition-all z-50 flex items-center gap-2"
      >
        <Sparkles className="w-5 h-5" />
        <span className="font-medium text-sm hidden sm:inline">Ask AI</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[calc(100vw-3rem)] sm:w-96 h-[500px] glass-card z-50 flex flex-col overflow-hidden"
          >
            <div className="p-4 border-bottom border-neutral-200/50 bg-neutral-50/50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-cv-blue/10 flex items-center justify-center text-cv-blue">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Manish's AI Assistant</h3>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Powered by Gemini</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-neutral-200 rounded-md transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-400">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Hello! I'm Manish's AI.</p>
                    <p className="text-xs text-neutral-500 leading-relaxed">Ask me about his experience at CAMS, his M.Tech at IIIT Allahabad, or his technical projects.</p>
                  </div>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-2 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`mt-1 p-1 rounded-md ${m.role === 'user' ? 'bg-cv-blue/10 text-cv-blue' : 'bg-neutral-100 text-neutral-600'}`}>
                      {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                      m.role === 'user' 
                        ? 'bg-cv-blue text-white rounded-tr-none' 
                        : 'bg-white border border-neutral-200/50 rounded-tl-none text-neutral-700'
                    }`}>
                      {m.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-neutral-100 p-3 rounded-2xl rounded-tl-none flex gap-1">
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-neutral-200/50">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type your question..."
                  className="w-full pl-4 pr-12 py-3 bg-neutral-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-cv-blue/20 transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-2 p-1.5 bg-cv-blue text-white rounded-lg disabled:opacity-50 transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
