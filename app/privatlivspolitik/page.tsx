import React from 'react';

export const metadata = {
  title: 'Privatlivspolitik | Tobias Stoklund',
  description: 'Læs hvordan vi håndterer cookies og persondata på tobiasstoklund.dk. Få indsigt i dine rettigheder og hvordan vi beskytter dit privatliv.'
};

export default function Privatlivspolitik() {
  return (
    <main className="min-h-screen bg-emerald-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4">Privatlivspolitik</h1>
        <p className="mb-6 text-gray-700">Din data og dit privatliv er vigtigt for mig. Her kan du læse, hvordan jeg håndterer cookies og personoplysninger på <b>tobiasstoklund.dk</b>.</p>
        <h2 className="text-2xl font-semibold text-emerald-600 mt-8 mb-2">Cookies</h2>
        <p className="mb-4 text-gray-700">Websitet bruger cookies til at forbedre brugeroplevelsen og til anonym statistik (fx Google Analytics). Cookies bruges ikke til markedsføring eller tredjepartsannoncering.</p>
        <h2 className="text-2xl font-semibold text-emerald-600 mt-8 mb-2">Personoplysninger</h2>
        <p className="mb-4 text-gray-700">Hvis du benytter kontaktformularen, gemmes dine oplysninger kun til besvarelse af din henvendelse. Oplysninger videregives ikke til tredjepart.</p>
        <h2 className="text-2xl font-semibold text-emerald-600 mt-8 mb-2">Dine rettigheder</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Du kan til enhver tid få indsigt i, hvilke oplysninger jeg har om dig.</li>
          <li>Du kan få rettet eller slettet dine oplysninger ved at kontakte mig.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-emerald-600 mt-8 mb-2">Kontakt</h2>
        <p className="mb-2 text-gray-700">Har du spørgsmål til privatliv eller data, kan du kontakte mig på <a href="mailto:info@tobiasstoklund.dk" className="underline text-emerald-700 hover:text-emerald-900">info@tobiasstoklund.dk</a>.</p>
        <p className="text-gray-400 text-sm mt-8">Senest opdateret: juni 2024</p>
      </div>
    </main>
  );
} 