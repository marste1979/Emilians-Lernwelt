/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Globe, 
  Map as MapIcon, 
  Zap, 
  Layers, 
  HelpCircle, 
  ChevronRight, 
  Trophy, 
  User, 
  Brain, 
  ArrowLeft,
  X,
  MessageCircle,
  Award
} from 'lucide-react';
import { MISSIONS } from './missions';
import { Mission, Question, UserStats, RANKS } from './types';
import { GoogleGenAI } from "@google/genai";

// Theme Variables (integrated via Tailwind class mapping or raw CSS)
const THEME = {
  bg: 'bg-[#0F0E0D]',
  rock: 'bg-[#1C1B19]',
  magma: 'text-[#FF4E00]',
  magmaGlow: 'shadow-[0_0_20px_#FF4E00]',
  accent: 'bg-[#FF4E00]',
  text: 'text-stone-200',
};

export default function App() {
  const [userStats, setUserStats] = useState<UserStats>(() => {
    const saved = localStorage.getItem('emilians_lernwelt_stats');
    return saved ? JSON.parse(saved) : {
      points: 0,
      completedMissions: [],
      badges: [],
      rank: RANKS[0],
      avatar: 'default',
      userName: ''
    };
  });

  const [currentView, setCurrentView] = useState<'start' | 'avatar' | 'map' | 'quiz' | 'professor' | 'diploma'>('start');
  const [activeMission, setActiveMission] = useState<Mission | null>(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [currentMissionPoints, setCurrentMissionPoints] = useState(0);
  const [showBot, setShowBot] = useState(false);
  const [botChat, setBotChat] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [isBotLoading, setIsBotLoading] = useState(false);

  const isAllCompleted = userStats.completedMissions.length === MISSIONS.length;

  useEffect(() => {
    if (isAllCompleted && currentView === 'map') {
      setCurrentView('professor');
    }
  }, [isAllCompleted, currentView]);

  useEffect(() => {
    localStorage.setItem('emilians_lernwelt_stats', JSON.stringify(userStats));
  }, [userStats]);

  const updatePoints = (p: number) => {
    setUserStats(prev => {
      const newPoints = prev.points + p;
      const rankIdx = Math.min(Math.floor(newPoints / 500), RANKS.length - 1);
      return { ...prev, points: newPoints, rank: RANKS[rankIdx] };
    });
  };

  const startMission = (mission: Mission) => {
    setActiveMission(mission);
    setCurrentQuestionIdx(0);
    setCurrentMissionPoints(0);
    setCurrentView('quiz');
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      updatePoints(100);
      setCurrentMissionPoints(prev => prev + 100);
      if (currentQuestionIdx + 1 < (activeMission?.questions.length || 0)) {
        setCurrentQuestionIdx(prev => prev + 1);
      } else {
        // Mission Complete
        setUserStats(prev => ({
          ...prev,
          completedMissions: Array.from(new Set([...prev.completedMissions, activeMission!.id]))
        }));
        setCurrentView('diploma');
      }
    } else {
      updatePoints(-20);
      if (currentQuestionIdx + 1 < (activeMission?.questions.length || 0)) {
        setCurrentQuestionIdx(prev => prev + 1);
      } else {
        setCurrentView('diploma');
      }
    }
  };

  const askBot = async (query: string) => {
    if (!query.trim()) return;
    setBotChat(prev => [...prev, { role: 'user', text: query }]);
    setIsBotLoading(true);

    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
      setTimeout(() => {
        setBotChat(prev => [...prev, { 
          role: 'bot', 
          text: 'Hinweis: Damit ich (GeoBot) antworten kann, muss ein gültiger API-Key in der App hinterlegt sein. Da dies eine Web-Demo für GitHub ist, wurde der Key aus Sicherheitsgründen entfernt.' 
        }]);
        setIsBotLoading(false);
      }, 1000);
      return;
    }

    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Du bist GeoBot, ein freundlicher KI-Assistent für Schüler im Alter von 14 Jahren in Emilians Lernwelt. 
                  Erkläre Begriffe kurz und einfach zum Thema Plattentektonik und Geologie. 
                  Antworte auf Deutsch. Bezug nehmend auf Frage: ${activeMission?.questions[currentQuestionIdx]?.text || ''}. 
                  Nutzer fragt: ${query}`,
      });
      setBotChat(prev => [...prev, { role: 'bot', text: response.text || 'Entschuldigung, ich konnte darauf nicht antworten.' }]);
    } catch (err) {
      setBotChat(prev => [...prev, { role: 'bot', text: 'Ups, mein tektonischer Sensor hat eine Störung.' }]);
    } finally {
      setIsBotLoading(false);
    }
  };

  return (
    <div className={`min-h-screen ${THEME.bg} ${THEME.text} font-sans selection:bg-[#FF4E00] selection:text-white`}>
      <AnimatePresence mode="wait">
        {currentView === 'start' && (
          <StartScreen onStart={() => setCurrentView('avatar')} />
        )}
        {currentView === 'avatar' && (
          <AvatarSelection onConfirm={(name, avatar) => {
            setUserStats(prev => ({ ...prev, userName: name, avatar }));
            setCurrentView('map');
          }} />
        )}
        {currentView === 'map' && (
          <MissionMap 
            stats={userStats} 
            onSelectMission={startMission} 
            onOpenBot={() => setShowBot(true)}
          />
        )}
        {currentView === 'quiz' && activeMission && (
          <QuizView 
            mission={activeMission}
            questionIdx={currentQuestionIdx}
            onAnswer={handleAnswer}
            onBack={() => setCurrentView('map')}
          />
        )}
        {currentView === 'diploma' && activeMission && (
          <DiplomaView 
            mission={activeMission}
            points={currentMissionPoints}
            userName={userStats.userName}
            rank={userStats.rank}
            onClose={() => setCurrentView('map')}
          />
        )}
        {currentView === 'professor' && (
          <ProfessorView stats={userStats} onRestart={() => {
            setUserStats({
              points: 0,
              completedMissions: [],
              badges: [],
              rank: RANKS[0],
              avatar: 'default',
              userName: ''
            });
            setCurrentView('start');
          }} />
        )}
      </AnimatePresence>

      {/* Persistent UI elements */}
      {showBot && (
        <BotOverlay 
          chat={botChat} 
          onClose={() => setShowBot(false)} 
          onAsk={askBot} 
          isLoading={isBotLoading}
        />
      )}
      
      {/* Bot Trigger */}
      {currentView !== 'start' && (
        <button 
          onClick={() => setShowBot(true)}
          className="fixed bottom-6 right-6 p-4 rounded-full bg-[#FF4E00] shadow-lg hover:scale-110 transition-transform z-40"
        >
          <MessageCircle size={24} className="text-white" />
        </button>
      )}
    </div>
  );
}

function StartScreen({ onStart }: { onStart: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen p-6 text-center"
    >
      <div className="mb-8 relative">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], rotate: [0, 1, 0, -1, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="w-32 h-32 rounded-full bg-yellow-400 blur-xl opacity-20 absolute -inset-2"
        />
        <Globe size={100} className="text-yellow-400 relative z-10" />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2 italic">EMILIANS LERNWELT</h1>
      <p className="text-stone-400 max-w-md mb-12 uppercase text-xs tracking-widest font-semibold">
        Plattentektonik & Vulkanismus • Interaktives Abenteuer
      </p>
      <button 
        onClick={onStart}
        className="group relative px-8 py-4 bg-stone-100 text-black font-bold uppercase tracking-widest text-sm hover:bg-[#FF4E00] hover:text-white transition-colors flex items-center gap-2"
      >
        Abenteuer Starten
        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
}

function AvatarSelection({ onConfirm }: { onConfirm: (name: string, avatar: string) => void }) {
  const [name, setName] = useState('');
  const [selected, setSelected] = useState('geo-1');

  const avatars = [
    { id: 'geo-1', icon: <User /> },
    { id: 'geo-2', icon: <Brain /> },
    { id: 'geo-3', icon: <Award /> },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen p-6"
    >
      <h2 className="text-3xl font-bold mb-8">Wähle deinen Geologen</h2>
      <div className="flex gap-4 mb-12">
        {avatars.map((av) => (
          <button
            key={av.id}
            onClick={() => setSelected(av.id)}
            className={`w-20 h-20 rounded-2xl flex items-center justify-center border-2 transition-all ${
              selected === av.id ? 'border-[#FF4E00] bg-[#FF4E00]/10 scale-110' : 'border-stone-800'
            }`}
          >
            {av.icon}
          </button>
        ))}
      </div>
      <div className="w-full max-w-sm">
        <label className="block text-xs uppercase tracking-widest text-stone-500 mb-2 font-bold">Dein Name</label>
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="z.B. Alex"
          className="w-full bg-[#1C1B19] border border-stone-800 p-4 rounded-xl focus:outline-none focus:border-[#FF4E00] transition-colors mb-8"
        />
        <button 
          disabled={!name}
          onClick={() => onConfirm(name, selected)}
          className="w-full p-4 bg-[#FF4E00] text-white font-bold uppercase tracking-widest rounded-xl disabled:opacity-50"
        >
          Profil Erstellen
        </button>
      </div>
    </motion.div>
  );
}

function MissionMap({ stats, onSelectMission, onOpenBot }: { stats: UserStats, onSelectMission: (m: Mission) => void, onOpenBot: () => void }) {
  const iconMap: Record<string, any> = { Globe, Zap, Layers, Map: MapIcon };

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="p-6 md:p-12 max-w-5xl mx-auto"
    >
      <header className="flex justify-between items-start mb-12 border-b border-stone-800 pb-8">
        <div>
          <h1 className="text-sm font-bold uppercase tracking-[0.2em] text-[#FF4E00] mb-1">Status: {stats.rank}</h1>
          <p className="text-3xl font-black text-white">{stats.userName}</p>
        </div>
        <div className="text-right">
          <div className="text-xs uppercase font-bold text-stone-500">Punkte</div>
          <div className="text-4xl font-black text-[#FF4E00]">{stats.points}</div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-24">
        {MISSIONS.map((mission) => {
          const IconComp = iconMap[mission.icon] || Globe;
          const isCompleted = stats.completedMissions.includes(mission.id);
          return (
            <motion.button
              key={mission.id}
              whileHover={{ y: -5 }}
              onClick={() => onSelectMission(mission)}
              className="bg-[#1C1B19] border border-stone-800 p-6 rounded-3xl text-left group hover:border-[#FF4E00]/50 transition-all flex items-center gap-6"
            >
              <div className={`p-4 rounded-2xl ${isCompleted ? 'bg-green-500/20 text-green-500' : 'bg-stone-800 text-stone-400 group-hover:text-[#FF4E00]'}`}>
                <IconComp size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{mission.title}</h3>
                <p className="text-sm text-stone-500">{mission.description}</p>
              </div>
              <ChevronRight className="ml-auto opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

function QuizView({ mission, questionIdx, onAnswer, onBack }: { mission: Mission, questionIdx: number, onAnswer: (correct: boolean) => void, onBack: () => void }) {
  const question = mission.questions[questionIdx];
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleChoice = (idx: number) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
    setTimeout(() => {
      onAnswer(idx === question.correctAnswer);
      setSelected(null);
      setShowResult(false);
    }, 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
      className="p-6 md:p-12 max-w-3xl mx-auto flex flex-col justify-center min-h-screen"
    >
      <button onClick={onBack} className="flex items-center gap-2 text-stone-500 hover:text-white transition-colors mb-12 uppercase text-xs font-bold tracking-widest">
        <ArrowLeft size={16} /> Abbruch
      </button>

      <div className="mb-4 flex justify-between items-end">
        <span className="text-[#FF4E00] font-bold uppercase text-xs tracking-widest">Mission: {mission.title}</span>
        <span className="text-stone-500 text-xs font-bold">{questionIdx + 1} / {mission.questions.length}</span>
      </div>
      <div className="w-full h-1 bg-stone-900 mb-12 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${((questionIdx) / mission.questions.length) * 100}%` }}
          className="h-full bg-[#FF4E00]"
        />
      </div>

      <h2 className="text-2xl md:text-4xl font-bold mb-12 leading-tight">{question.text}</h2>

      <div className="grid grid-cols-1 gap-4">
        {question.options.map((opt, i) => (
          <button
            key={i}
            disabled={showResult}
            onClick={() => handleChoice(i)}
            className={`p-6 rounded-2xl text-left border-2 transition-all flex items-center justify-between font-medium ${
              showResult
                ? i === question.correctAnswer
                  ? 'border-green-500 bg-green-500/10 text-green-500'
                  : i === selected
                  ? 'border-red-500 bg-red-500/10 text-red-500'
                  : 'border-stone-800 opacity-50'
                : 'border-stone-800 hover:border-[#FF4E00] hover:bg-[#FF4E00]/5'
            }`}
          >
            {opt}
            {showResult && i === question.correctAnswer && <Trophy size={18} />}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {showResult && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 rounded-2xl bg-stone-900/50 border border-stone-800"
          >
            <p className="text-sm italic text-stone-400">{question.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function BotOverlay({ chat, onAsk, onClose, isLoading }: { chat: any[], onAsk: (q: string) => void, onClose: () => void, isLoading: boolean }) {
  const [input, setInput] = useState('');

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end md:items-center justify-center p-4"
    >
      <div className="bg-[#1C1B19] w-full max-w-lg rounded-3xl overflow-hidden flex flex-col h-[80vh]">
        <header className="p-6 border-b border-stone-800 flex justify-between items-center bg-[#FF4E00]/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FF4E00] flex items-center justify-center text-white">
              <Brain size={24} />
            </div>
            <div>
              <h3 className="font-bold flex items-center gap-2">GeoBot <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div></h3>
              <p className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Erdschichten-Experte</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-stone-800 rounded-full transition-colors text-stone-400">
            <X size={24} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {chat.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-stone-500 space-y-4">
              <HelpCircle size={48} className="opacity-20" />
              <p className="text-center text-sm px-12">Ich bin dein persönlicher Geo-Assistent. Frag mich alles über Vulkane, Platten oder Erdbeben!</p>
            </div>
          )}
          {chat.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                msg.role === 'user' ? 'bg-[#FF4E00] text-white' : 'bg-stone-800 text-stone-200'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-stone-800 p-4 rounded-2xl flex gap-1">
                <span className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-stone-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-stone-800 bg-stone-900/50">
          <form 
            onSubmit={(e) => { e.preventDefault(); onAsk(input); setInput(''); }}
            className="flex gap-2"
          >
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Frag GeoBot..."
              className="flex-1 bg-stone-800 border-none p-4 rounded-2xl text-sm focus:ring-1 focus:ring-[#FF4E00] outline-none"
            />
            <button className="p-4 bg-[#FF4E00] text-white rounded-2xl hover:scale-105 active:scale-95 transition-transform">
              <ChevronRight size={20} />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

function ProfessorView({ stats, onRestart }: { stats: UserStats, onRestart: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center min-h-screen p-6 text-center"
    >
      <Trophy size={100} className="text-yellow-500 mb-8 animate-bounce" />
      <h1 className="text-5xl font-black mb-4 tracking-tighter">HERZLICHEN GLÜCKWUNSCH!</h1>
      <p className="text-xl text-stone-400 mb-2 uppercase tracking-widest font-bold">Du hast es geschafft, {stats.userName}!</p>
      <div className="bg-[#FF4E00] text-white px-6 py-2 rounded-full font-bold mb-12">
        UNI PROFESSOR FÜR GEOLOGIE
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-12 max-w-sm w-full">
        <div className="bg-[#1C1B19] p-4 rounded-2xl border border-stone-800">
          <div className="text-xs font-bold text-stone-500 uppercase">Punkte</div>
          <div className="text-2xl font-black text-[#FF4E00]">{stats.points}</div>
        </div>
        <div className="bg-[#1C1B19] p-4 rounded-2xl border border-stone-800">
          <div className="text-xs font-bold text-stone-500 uppercase">Missionen</div>
          <div className="text-2xl font-black text-green-500">{stats.completedMissions.length}</div>
        </div>
      </div>

      <p className="text-stone-500 text-sm max-w-md mb-12 italic text-balance">
        "Du hast bewiesen, dass du die komplexen Zusammenhänge unserer Erde verstehst. Vom Aufbau des Kerns bis hin zur Drift der Kontinente bist du nun ein wahrer Experte."
      </p>

      <button 
        onClick={onRestart}
        className="px-8 py-4 bg-stone-100 text-black font-bold uppercase tracking-widest text-sm hover:bg-[#FF4E00] hover:text-white transition-colors rounded-xl"
      >
        Neu Starten
      </button>
    </motion.div>
  );
}

function DiplomaView({ mission, points, userName, rank, onClose }: { mission: Mission, points: number, userName: string, rank: string, onClose: () => void }) {
  const isPassed = points >= 600;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center min-h-screen p-6"
    >
      <div className="relative w-full max-w-2xl bg-[#fdfbf7] p-12 text-stone-900 shadow-2xl rounded-sm border-[16px] border-double border-stone-200">
        <div className="absolute top-4 right-4 text-stone-300 pointer-events-none">
          <Award size={120} strokeWidth={0.5} />
        </div>
        
        <header className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#FF4E00] mb-4">Emilians Lernwelt</h2>
          <div className="w-16 h-0.5 bg-[#FF4E00] mx-auto mb-8" />
          <h1 className="text-4xl font-display font-medium tracking-tight mb-2">GEOLOGIE-DIPLOM</h1>
          <p className="text-xs font-medium uppercase tracking-widest text-stone-500">Offizielles Zertifikat der Sekundarstufe 1</p>
        </header>

        {isPassed ? (
          <div className="space-y-8 text-center">
            <p className="text-stone-600 font-serif italic text-lg">Hiermit wird feierlich bescheinigt, dass</p>
            <h3 className="text-3xl font-bold tracking-tight border-b-2 border-stone-200 inline-block px-8 py-2 font-display">{userName}</h3>
            <p className="text-stone-600 text-sm leading-relaxed max-w-md mx-auto">
              die Mission <span className="font-bold text-stone-900">{mission.title}</span> erfolgreich abgeschlossen und dabei ein tiefgreifendes Verständnis für plattentektonische Prozesse und geologische Zusammenhänge bewiesen hat.
            </p>
            <div className="pt-8 flex justify-between items-end">
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-stone-400 mb-1">Aktueller Status</p>
                <p className="font-bold text-[#FF4E00]">{rank}</p>
              </div>
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-yellow-500/20 border-2 border-yellow-600/30 flex items-center justify-center rotate-12">
                  <span className="font-bold text-xs text-yellow-800 uppercase tracking-tighter">Verifiziert</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase font-bold text-stone-400 mb-1">Erreichte Punkte</p>
                <p className="font-bold">{points} / 800</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4">Fast geschafft!</h3>
            <p className="text-stone-500 mb-8">Du hast die Mission beendet, aber für das Diplom fehlen dir noch ein paar Punkte. Versuch es gleich nochmal!</p>
          </div>
        )}
      </div>

      <button 
        onClick={onClose}
        className="mt-12 group px-8 py-4 bg-[#FF4E00] text-white font-bold uppercase tracking-widest text-sm hover:scale-105 transition-all flex items-center gap-2 rounded-xl"
      >
        Weiter zur Weltkarte
        <ChevronRight size={18} />
      </button>
    </motion.div>
  );
}
