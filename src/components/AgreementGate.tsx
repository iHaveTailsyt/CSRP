'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AgreementGate({ children }: { children: React.ReactNode }) {
  const [agreed, setAgreed] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasAgreed = localStorage.getItem('agreedToRules');
    if (hasAgreed === 'true') {
      setAgreed(true);
    } else {
      setShow(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem('agreedToRules', 'true');
    setShow(false);
    setTimeout(() => setAgreed(true), 300); // Wait for exit animation
  };

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 text-white flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="max-w-3xl w-full bg-gray-800 p-6 rounded-xl shadow-2xl overflow-y-auto max-h-[80vh]"
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <h1 className="text-3xl font-bold mb-4 text-center">📜 Server Rules Agreement</h1>
              <p className="text-gray-300 mb-4 text-center">
                Please review and accept the rules before accessing the site
              </p>

              <ol className="list-decimal list-inside space-y-3 text-gray-200 text-sm max-h-96 overflow-y-auto">
                <li>No Fail RP – Always roleplay seriously.</li>
                <li>No RDM/VDM – Killing or running people over randomly is not allowed.</li>
                <li>Respect Staff – Be respectful to all team members.</li>
                <li>No Exploiting – Any form of cheating = permanent ban.</li>
                <li>Use Realistic Names – Keep it clean and real.</li>
                <li>Follow Discord & Roblox ToS.</li>
                <li>No Spamming – Don’t spam chats or game features.</li>
              </ol>

              <button
                onClick={handleAgree}
                className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded transition"
              >
                ✅ I Agree to the Rules
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {agreed && children}
    </>
  );
}
