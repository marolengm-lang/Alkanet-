import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS, SERVICES_LIST } from '../data/companyData';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  actionButton?: {
    label: string;
    action: () => void;
  };
}

interface ChatBotProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ChatBot: React.FC<ChatBotProps> = ({ onOpenQuoteModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: `Hello! I am the ALKANET AI Assistant. How can I assist you with hand assembly, packaging, kitting, or outsourced labour in South Africa today?`,
      time: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');

    // AI Knowledge Matching Logic
    setTimeout(() => {
      const lower = query.toLowerCase();
      let botReply = '';

      if (lower.includes('quote') || lower.includes('price') || lower.includes('cost') || lower.includes('estimate')) {
        botReply = `Our pricing is structured per unit or on a project workforce rate depending on component complexity and batch size. Would you like me to open the official Quote Form for you?`;
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: 'bot',
            text: botReply,
            time: 'Just now',
            actionButton: {
              label: 'Open Quote Request Form',
              action: () => onOpenQuoteModal()
            }
          }
        ]);
        return;
      }

      if (lower.includes('location') || lower.includes('pretoria') || lower.includes('johannesburg') || lower.includes('where')) {
        botReply = `ALKANET HOLDINGS operates primary logistics hubs in Pretoria, Centurion, and Johannesburg, Gauteng. We also service client facilities on-site and provide nationwide dispatch across all 9 South African provinces.`;
      } else if (lower.includes('phone') || lower.includes('contact') || lower.includes('call') || lower.includes('number')) {
        botReply = `You can call our sales desk directly at 071 885 4474 or 083 951 7504, or email info@alkanet.co.za.`;
      } else if (lower.includes('kitting') || lower.includes('subscription') || lower.includes('bundle')) {
        botReply = `We specialize in multi-SKU product kitting, subscription boxes, and promotional hampers with custom tissue wrapping, barcode verification, and master packing.`;
      } else if (lower.includes('assembly') || lower.includes('folding') || lower.includes('box')) {
        botReply = `We offer manual product assembly, cardboard box folding, file folder assembly, component fitting, and quality inspection with high daily capacity in Gauteng.`;
      } else if (lower.includes('labour') || lower.includes('workers') || lower.includes('staff')) {
        botReply = `We deploy fully managed, supervised manual labour teams for warehouse processing, container unloading, and packaging lines compliant with BCEA and Labour Relations Act.`;
      } else {
        botReply = `Thank you for your question. ALKANET HOLDINGS (PTY) LTD is South Africa's leading provider of hand assembly, contract packaging, kitting, labelling, and outsourced labour solutions. Would you like a representative to call you back or issue a quick estimate?`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: botReply,
          time: 'Just now'
        }
      ]);
    }, 600);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-3.5 rounded-full bg-[#1B5E20] hover:bg-[#144718] text-white font-bold text-sm shadow-2xl hover:scale-105 transition-all cursor-pointer group border-2 border-[#A5D6A7]/40"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 text-white" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#66BB6A] rounded-full animate-ping" />
          </div>
          <span className="hidden sm:inline">ALKANET Live Chat</span>
        </button>
      ) : (
        <div className="bg-white dark:bg-[#1B5E20] rounded-2xl shadow-2xl border border-slate-200 dark:border-green-800 w-80 sm:w-96 h-[480px] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#1B5E20] text-white p-3.5 flex items-center justify-between border-b border-[#144718]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#66BB6A] flex items-center justify-center text-[#1B5E20] font-extrabold text-xs">
                AI
              </div>
              <div>
                <div className="font-bold text-xs flex items-center gap-1.5">
                  <span>Alkanet Virtual Assistant</span>
                  <span className="w-2 h-2 rounded-full bg-[#66BB6A]" />
                </div>
                <p className="text-[10px] text-[#E8F5E9]/80">Online • 24/7 Assembly Support</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-[#E8F5E9] hover:text-white hover:bg-[#144718] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-grow p-4 overflow-y-auto space-y-3 bg-slate-50 dark:bg-green-950/40 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-[#1B5E20] flex items-center justify-center text-white shrink-0 mt-0.5 border border-[#A5D6A7]/40">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl p-3 shadow-sm ${
                    m.sender === 'user'
                      ? 'bg-[#1B5E20] dark:bg-[#237829] text-white rounded-br-none border border-[#66BB6A]/30'
                      : 'bg-white dark:bg-green-950 text-slate-800 dark:text-slate-100 rounded-bl-none border border-slate-200 dark:border-green-800'
                  }`}
                >
                  <p className="leading-relaxed">{m.text}</p>
                  {m.actionButton && (
                    <button
                      onClick={m.actionButton.action}
                      className="mt-2 w-full py-1.5 px-3 bg-[#66BB6A] hover:bg-[#57a95b] text-white font-bold rounded-lg text-[11px] flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>{m.actionButton.label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                  <span className="text-[9px] opacity-60 block text-right mt-1">{m.time}</span>
                </div>
                {m.sender === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-[#66BB6A] flex items-center justify-center text-white shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Prompt Suggestions */}
          <div className="px-3 py-1.5 bg-slate-100 dark:bg-green-950/80 border-t border-slate-200 dark:border-green-800 flex items-center gap-1.5 overflow-x-auto text-[10px] text-slate-600 dark:text-[#E8F5E9]">
            <button
              onClick={() => handleSend('How much does hand assembly cost?')}
              className="px-2 py-1 rounded bg-white dark:bg-green-900/60 hover:bg-[#E8F5E9] dark:hover:bg-green-900 text-slate-800 dark:text-[#E8F5E9] shrink-0 border border-slate-200 dark:border-green-700 cursor-pointer"
            >
              Get Pricing
            </button>
            <button
              onClick={() => handleSend('What are your services in Pretoria & Johannesburg?')}
              className="px-2 py-1 rounded bg-white dark:bg-green-900/60 hover:bg-[#E8F5E9] dark:hover:bg-green-900 text-slate-800 dark:text-[#E8F5E9] shrink-0 border border-slate-200 dark:border-green-700 cursor-pointer"
            >
              Gauteng Services
            </button>
            <button
              onClick={() => handleSend('Can you handle urgent 24-48 hr jobs?')}
              className="px-2 py-1 rounded bg-white dark:bg-green-900/60 hover:bg-[#E8F5E9] dark:hover:bg-green-900 text-slate-800 dark:text-[#E8F5E9] shrink-0 border border-slate-200 dark:border-green-700 cursor-pointer"
            >
              Rush Orders
            </button>
          </div>

          {/* Input Bar */}
          <div className="p-2.5 bg-white dark:bg-[#1B5E20] border-t border-slate-200 dark:border-green-800 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask a question..."
              className="flex-grow px-3 py-2 rounded-lg bg-slate-100 dark:bg-green-950 border border-slate-200 dark:border-green-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#66BB6A]"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-lg bg-[#1B5E20] dark:bg-[#66BB6A] hover:bg-[#144718] dark:hover:bg-[#57a95b] text-white transition-colors cursor-pointer border border-[#A5D6A7]/40"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
