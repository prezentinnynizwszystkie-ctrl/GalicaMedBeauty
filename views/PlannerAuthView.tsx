
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, ArrowLeft } from 'lucide-react';

interface PlannerAuthViewProps {
  setView: (view: any) => void;
  onAuthSuccess: () => void;
}

const PlannerAuthView: React.FC<PlannerAuthViewProps> = ({ setView, onAuthSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleAuth = () => {
    if (password.toLowerCase() === 'test') {
      onAuthSuccess();
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-8 pt-32 text-center flex flex-col items-center justify-center min-h-[80vh]">
      <div className="bg-[#5C4033]/5 p-6 rounded-full mb-8"><Lock className="w-10 h-10 text-[#5C4033]" /></div>
      <h1 className="text-3xl font-serif text-gray-800 mb-6">Witaj w Planerze</h1>
      <p className="text-gray-600 leading-relaxed mb-10 max-w-sm">Wpisz swoje hasło, aby uzyskać dostęp do spersonalizowanej mapy pielęgnacji przygotowanej przez Twojego kosmetologa.</p>

      <div className="w-full max-w-xs space-y-4">
        <motion.div animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}>
          <input 
            type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAuth()}
            placeholder="Hasło (test)"
            className={`w-full bg-white border ${error ? 'border-red-400' : 'border-gray-100'} px-6 py-4 rounded-full text-center shadow-sm focus:border-[#D4AF37] transition-all`}
          />
        </motion.div>
        <button onClick={handleAuth} className="w-full py-4 bg-[#5C4033] text-white rounded-full font-medium shadow-lg hover:bg-[#4A3329] transition-all">Wejdź do planera</button>
        <button onClick={() => setView('menu')} className="flex items-center gap-2 mx-auto pt-8 text-gray-400 hover:text-gray-600 transition-colors text-xs font-bold uppercase tracking-widest"><ArrowLeft className="w-4 h-4" /> Wróć do menu</button>
      </div>
    </motion.div>
  );
};

export default PlannerAuthView;
