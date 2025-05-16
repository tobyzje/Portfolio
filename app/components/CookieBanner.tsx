"use client";
import { useEffect, useState } from "react";
import { FaCookieBite, FaChartBar, FaBullhorn, FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const defaultCookies = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export default function CookieBanner() {
  const [showCookie, setShowCookie] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [cookies, setCookies] = useState(defaultCookies);

  useEffect(() => {
    if (typeof window !== 'undefined' && !localStorage.getItem('cookieConsent')) {
      setShowCookie(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({ ...cookies, analytics: true, marketing: true }));
    setShowCookie(false);
  };
  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({ ...cookies, analytics: false, marketing: false }));
    setShowCookie(false);
  };
  const saveAdvanced = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(cookies));
    setShowCookie(false);
  };

  if (!showCookie) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center md:items-center md:justify-center bg-black/40 backdrop-blur-sm">
      <div className="m-4 px-0 py-0 bg-white/95 border-0 rounded-2xl shadow-2xl flex flex-col items-center max-w-md w-full animate-fadeInUp overflow-hidden">
        {/* Header med ikon og gradient */}
        <div className="w-full flex flex-col items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-400 py-6 px-8">
          <FaCookieBite className="text-white text-4xl mb-2 drop-shadow-lg" />
          <h2 className="text-white text-xl font-bold mb-1">Cookies & Privatliv</h2>
          <p className="text-emerald-50 text-sm text-center max-w-xs">Vi bruger cookies til statistik og funktionalitet. Læs mere i vores <a href="/privatlivspolitik" className="underline hover:text-white">privatlivspolitik</a>.</p>
        </div>
        {/* Body */}
        <div className="w-full flex flex-col items-center gap-4 px-6 py-6">
          {!showAdvanced && (
            <>
              <button
                onClick={acceptAll}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors text-base shadow-md mb-2"
              >
                <FaCheck /> Accepter alle cookies
              </button>
              <button
                onClick={acceptNecessary}
                className="w-full flex items-center justify-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-base shadow-sm mb-2"
              >
                Kun nødvendige
              </button>
            </>
          )}
          <button
            onClick={() => setShowAdvanced((v) => !v)}
            className="flex items-center gap-2 text-emerald-700 underline text-sm mt-1 hover:text-emerald-900"
          >
            {showAdvanced ? <FaChevronUp /> : <FaChevronDown />} {showAdvanced ? 'Skjul avancerede cookies' : 'Se avancerede cookies'}
          </button>
          {showAdvanced && (
            <div className="w-full bg-emerald-50 border border-emerald-100 rounded-lg p-4 mt-2 animate-fadeInUp">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-700 flex items-center gap-2"><FaCookieBite className="text-emerald-500" />Nødvendige cookies</span>
                <input type="checkbox" checked disabled className="accent-emerald-600" />
              </div>
              <p className="text-xs text-gray-500 mb-3">Disse cookies er nødvendige for at siden fungerer og kan ikke fravælges.</p>
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-700 flex items-center gap-2"><FaChartBar className="text-emerald-500" />Statistik (anonym)</span>
                <input
                  type="checkbox"
                  checked={cookies.analytics}
                  onChange={e => setCookies(c => ({ ...c, analytics: e.target.checked }))}
                  className="accent-emerald-600"
                />
              </div>
              <p className="text-xs text-gray-500 mb-3">Hjælper os med at forstå brugen af siden (fx Google Analytics).</p>
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-gray-700 flex items-center gap-2"><FaBullhorn className="text-emerald-500" />Marketing</span>
                <input
                  type="checkbox"
                  checked={cookies.marketing}
                  onChange={e => setCookies(c => ({ ...c, marketing: e.target.checked }))}
                  className="accent-emerald-600"
                />
              </div>
              <p className="text-xs text-gray-500 mb-2">Bruges til annoncering og personalisering (ikke aktiv på denne side).</p>
              <button
                onClick={saveAdvanced}
                className="w-full mt-4 flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors text-base shadow-md"
              >
                <FaCheck /> Gem valg
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 